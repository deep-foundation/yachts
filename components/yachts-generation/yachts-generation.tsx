import { Box, Center, Image, useMediaQuery } from '@chakra-ui/react';
import React, { useState, useMemo, useEffect} from 'react';
import { GenerationForm } from './yachts-generation-form';
import { GenerationButton, GenerationImage } from './yachts-generation-image';
import { GenerationImageGallery } from './yachts-generation-image-gallery';
import { useDeep, useDeepSubscription } from "@deep-foundation/deeplinks/imports/client";
import { Link } from '@deep-foundation/deeplinks/imports/minilinks';


export const YachtsGeneration = React.memo(({ onClick }:{ onClick?: () => void; }) => {
  const [startCreate, setStartCreate] = useState(false);
  const [startGen, setStartGen] = useState(false);
  const [imgGen, setImgGen] = useState(false);

  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [isSmallerThan945] = useMediaQuery('(max-width: 945px)');

  // deep types
  const [drawResultTypeId, setDrawResultTypeId] = useState(0);
  const [drawRequestTypeId, setDrawRequestTypeId] = useState(0);
  const [settingsId, setSettingsId] = useState(0);
  const [midjourneyRequestTypeId, setMidjourneyRequestTypeId] = useState(0);
  const [isPublishedTypeId, setIsPublishedTypeId] = useState(0);
  // deep links
  const [requestId, setRequestId] = useState(0);

  const deep = useDeep();
  
  useEffect(() => {
    // load deep types
    const f = async () => {
      setDrawResultTypeId(await deep.id("@agsagds/yacht-co", "DrawResult"));
      setDrawRequestTypeId(await deep.id("@agsagds/yacht-co", "DrawRequest"));
      setIsPublishedTypeId(await deep.id("@agsagds/yacht-co", "IsPublished"));
      const settingsTypeId = await deep.id("@agsagds/yacht-co", "MidjourneySettings");
      setSettingsId((await deep.select({type_id: {_eq: settingsTypeId}})).data[0]?.id);
      setMidjourneyRequestTypeId(await deep.id("@agsagds/midjourney", "MidjourneyRequest"));
    }

    f();
  }, []);

  function getDrawResultLink() : Link<number> | undefined {
    const add = deep.minilinks.query({
      _and: [
        {type_id: {_eq:drawResultTypeId }},
        {from_id: {_eq: requestId}}
      ]
    })[0];
    return add 
    console.log('add:', add);
  }
  async function saveToGalleryHandler() {
    const drawResultLinkId = getDrawResultLink()?.id;

    const isPublishedLink = deep.minilinks.query({
      _and: [
        {type_id: {_eq:isPublishedTypeId }},
        {from_id: {_eq: drawResultLinkId}}
      ]
    })[0];
    if (isPublishedLink) 
      return;
    
    const {data: [isPublishedLinkId] } = await deep.insert({
        type_id: isPublishedTypeId,
        from_id: drawResultLinkId,
        to_id: drawResultLinkId
      });
    console.log(`iPublishedLink: ${isPublishedLinkId}`)
  }

  function getPublishedLinks(): Link<number>[]{
    const links = deep.minilinks.query(
      { 
        _and: [
          {type_id: {_eq: drawResultTypeId }},
          {in: {type_id: {_eq: isPublishedTypeId}}}
        ]
      });
    console.log('published links:')
    console.log(links);
    return links;
    console.log('links:', links);  
  }

  // subscribe on deep DrawResult links
  const { loading, data, error } = useDeepSubscription(useMemo(() => ({
    _or: [
      {
        type_id: { _in: [drawResultTypeId, isPublishedTypeId] }
      },
      {
        id: {
          _eq: settingsId
        }
      }
    ]
  }),[drawResultTypeId, settingsId]));

  return (<Center display='flex' flexDir='column' p={isSmallerThan945 ? '2rem 1rem' : '5.6rem'}>
      <Box 
        display='flex' 
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        w='max-content'
      >
        {startCreate === false ? <Box textStyle='h3' mb={isSmallerThan500 ? '1.5rem' : '4rem'}>create your own design</Box> : null}
        <Box w={isSmallerThan500 ? '70%' : '100%'} mb='2rem'>
          <Image src='/logo.svg' alt="Cristal Yacht Logo" width='100%' />
        </Box>
        <Box as='h2' textStyle='h2Generator' textAlign='center' mb={isSmallerThan500 ? '1.5rem' : '3rem'}>Crystal Yachts - Future is here</Box>
      </Box>
      <Box display='grid' gridTemplateColumns='0.1fr 1fr 0.1fr' w='100%' justifyItems='center' mb={isSmallerThan800 ? 0 : '4rem'}>
        {
          startCreate === false
          ? <><GenerationButton 
              onClick={() => {
                setStartCreate(true);
              }} 
              buttonProps={{ 
                gridColumn: '2/3', 
                width:isSmallerThan500 ? '65%' : isSmallerThan945 ? '100%' : '30%', 
                height: isSmallerThan500 ? '2rem' : '5rem',
                mb: isSmallerThan800 ? '2rem' : '4rem' 
              }}
              textProps={{
                fontSize: isSmallerThan500 ? 'sm' : 'md',
              }}
            />
            {isSmallerThan800 
            ? <GenerationImageGallery 
                photos={
                  getPublishedLinks().map((item) => {
                    return {
                      id: item.value.value.id,
                      src: item.value.value.img_url,
                      alt: item.value.value.error
                    }
                  })
                }
              /> : null}</>
          : startGen === false 
          ? <GenerationForm 
              onClick={() => {
                setStartGen(true);
              }} 
              containerProps={{gridColumn: isSmallerThan800 ? '1 / 4' : '2/3', mb: '5rem'}}
              setRequestId={setRequestId}
              deep={deep}
              drawRequestTypeId={drawRequestTypeId}
              midjourneyRequestTypeId={midjourneyRequestTypeId}
              settingsId={settingsId}
            />
          : imgGen === false
          ? <GenerationImage 
              src={getDrawResultLink()?.value?.value.img_url} 
              progress={getDrawResultLink()?.value?.value.progress}
              saveToGalleryHandler={saveToGalleryHandler}
              onWriteNewDescription={() => setStartGen(false)}
              containerProps={{gridColumn: isSmallerThan800 ? '1 / 4' : '2/3'}} onClickToGallery={() => setImgGen(true)} />
          : <GenerationImageGallery photos={
            getPublishedLinks().map((item) => {
              return {
                id: item.value.value.id,
                src: item.value.value.img_url,
                alt: item.value.value.error
              }
            })
          }/>
        }
      </Box>
    </Center>
  );
})