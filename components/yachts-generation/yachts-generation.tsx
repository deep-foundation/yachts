import { Box, Button, Center, Image, useMediaQuery, Text } from '@chakra-ui/react';
import React, { useState, useMemo, useEffect} from 'react';
import { GenerationForm } from './yachts-generation-form';
import { GenerationButton, GenerationImage } from './yachts-generation-image';
import { GenerationImageGallery } from './yachts-generation-image-gallery';
import { useDeep, useDeepSubscription } from "@deep-foundation/deeplinks/imports/client";
import {useMinilinksSubscription} from "@deep-foundation/deeplinks/imports/minilinks";
import { Link } from '@deep-foundation/deeplinks/imports/minilinks';
import { TextBlock } from '../text-block';


export const YachtsGeneration = React.memo(({ onClick }:{ onClick?: () => void; }) => {
  const [startCreate, setStartCreate] = useState(false);
  const [startGen, setStartGen] = useState(false);
  const [imgGen, setImgGen] = useState(false);

  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan945] = useMediaQuery('(max-width: 945px)');
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');

  /*
    Use constants instead useEffect link loads, because useEffect not eval on server-side.
    If we will loading links in useEffect, we need to rerender page after each await operation complete.
    If we want to evaluate useDeepSubscription due server-side-render we need to set all variables as constants.
  */
  // deep types
  const drawResultTypeId = 1202;
  const drawRequestTypeId = 1200;
  const midjourneyRequestTypeId = 1151;
  const isPublishedTypeId = 1204;
  const sendEmailTypeId = 1265;
  // deep links
  const [requestId, setRequestId] = useState(0);
  const settingsId = 1438;
  const sendToId = 1458;
  const letterSubjectId = 1462;
  const letterTextId = 1486;

  const deep = useDeep();
  // console.log('render')

  /*
    Save this part for collect links data for new deep deployments
  */
  // // deep types
  // const [drawResultTypeId, setDrawResultTypeId] = useState(0);
  // const [drawRequestTypeId, setDrawRequestTypeId] = useState(0);
  // const [midjourneyRequestTypeId, setMidjourneyRequestTypeId] = useState(0);
  // const [isPublishedTypeId, setIsPublishedTypeId] = useState(0);
  // const [sendEmailTypeId, setSendEmailTypeId] = useState(0);
  // // deep links
  // const [requestId, setRequestId] = useState(0);
  // const [settingsId, setSettingsId] = useState(0);
  // const [sendToId, setSendToId] = useState(0);
  // const [letterSubjectId, setLetterSubjectId] = useState(0);
  // const [letterTextId, setLetterTextId] = useState(0);

  // console.log(`drawResultTypeId ${drawResultTypeId}`);
  // console.log(`drawRequestTypeId ${drawRequestTypeId}`);
  // console.log(`midjourneyRequestTypeId ${midjourneyRequestTypeId}`);
  // console.log(`isPublishedTypeId ${isPublishedTypeId}`);
  // console.log(`sendEmailTypeId ${sendEmailTypeId}`);
  // console.log(`settingsId ${settingsId}`);
  // console.log(`sendToId ${sendToId}`);
  // console.log(`letterSubjectId ${letterSubjectId}`);
  // console.log(`letterTextId ${letterTextId}`);
  
  // useEffect(() => {
  //   // load deep types
  //   const f = async () => {
  //     setDrawResultTypeId(await deep.id("@agsagds/yacht-co", "DrawResult"));
  //     setDrawRequestTypeId(await deep.id("@agsagds/yacht-co", "DrawRequest"));
  //     setIsPublishedTypeId(await deep.id("@agsagds/yacht-co", "IsPublished"));
  //     const settingsTypeId = await deep.id("@agsagds/yacht-co", "MidjourneySettings");
  //     setSettingsId((await deep.select({type_id: {_eq: settingsTypeId}})).data[0]?.id);
  //     setMidjourneyRequestTypeId(await deep.id("@agsagds/midjourney", "MidjourneyRequest"));
      
  //     setSendEmailTypeId(await deep.id("@suenot/mail-sender", "SendEmail"));
  //     const sendToTypeId = await deep.id("@suenot/mail-sender", "SendTo");
  //     const letterSubjectTypeId = await deep.id("@suenot/mail-sender", "LetterSubject");
  //     const letterTextTypeId = await deep.id("@suenot/mail-sender", "LetterText");
  //     setSendToId((await deep.select({type_id: {_eq: sendToTypeId}})).data[0]?.id);
  //     setLetterSubjectId((await deep.select({type_id: {_eq: letterSubjectTypeId}})).data[0]?.id);
  //     setLetterTextId((await deep.select({type_id: {_eq: letterTextTypeId}})).data[0]?.id);
  //   }

  //   f();
  // }, []);

  function getDrawResultLink() : Link<number> | undefined {
    const add = deep.minilinks.query({

      _and: [
        {type_id: {_eq:drawResultTypeId }},
        {from_id: {_eq: requestId}}
      ]
    })[0];
    return add;
  }
  async function saveToGalleryHandler() {
    const drawResultLink = getDrawResultLink();
    if(drawResultLink) {
      gallery_data.push(drawResultLink);
    }
    const drawResultLinkId = drawResultLink?.id;

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
  }

  // function getPublishedLinks(): Link<number>[]{
  //   // console.log('getting')
  //   const links = deep.minilinks.query(
  //     { 
  //       _and: [
  //         {type_id: {_eq: drawResultTypeId }},
  //         {in: {type_id: {_eq: isPublishedTypeId}}}
  //       ]
  //     }); 
  //   // console.log('getted', links.length)
  //   return links;
  // }
  const {data: gallery_data} = deep.useDeepQuery({
    _and: [
          {type_id: {_eq: drawResultTypeId }},
          {in: {type_id: {_eq: isPublishedTypeId}}}
        ]
  })
  // console.log(gallery_data)
  // const gallery_data = deep.useMinilinksSubscription(useMemo(() => ({
  //   _and: [
  //     {type_id: {_eq: drawResultTypeId }},
  //     {in: {type_id: {_eq: isPublishedTypeId}}}
  //   ]
  // }),[drawResultTypeId, isPublishedTypeId]));
  // console.log('render', gallery_data)

  async function sendMailHandler(msg: string): Promise<void> {
    
    await deep.update({link_id: letterTextId}, {value: msg}, {table: 'strings'});

    const {data: [sendEMailLinkId] } = await deep.insert({
      type_id: sendEmailTypeId,
      from_id: letterSubjectId,
      to_id: sendToId
    });
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
  // console.log('deep subscription', loading, data)
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
          ? <>
              <Box sx={{gridColumn: '2/3', display: 'flex', flexDir: 'column'}}
                alignItems='center'
                justifyContent='center'
                textAlign={'center'} >
                <GenerationButton 
                  onClick={() => {
                    setStartCreate(true);
                  }} 
                  buttonProps={{  
                    // width:isSmallerThan500 ? '65%' : isSmallerThan945 ? '100%' : '30%', 
                    // height: isSmallerThan500 ? '2rem' : '5rem',
                    width:isSmallerThan500 ? '65%' : isSmallerThan945 ? '100%' : '30%',
                    mb: '2rem' 
                  }}
                  textProps={{
                    fontSize: isSmallerThan500 ? 'sm' : 'md',
                  }}
                />
                  <Box width='25%' height='0.05rem' alignSelf='center' bg='text' mb='1.5rem' />
                  <Box alignSelf='center' 
                        width={isSmallerThan945 ? '100%' : '75%'}>
                  <Text textStyle='semiBoldText' align='center' mb='1.5rem' >
                    Here you can generate an image of a yacht using advanced AI tools. <br/> We made it extremely simple 
                  </Text>
                  <Text textStyle='generationBlueText' align='center' mb='1.5rem' >
                    Based on your ideas and requirements we can create 3D model of your future yacht, as a first step to your dream
                  </Text>
                  </Box>
                  <Box width='25%' height='0.05rem' alignSelf='center' bg='text' mb='2rem' />
                {
                  isSmallerThan800 === false ? 
                    <Button 
                      onClick={() => {setStartCreate(true); setStartGen(true); setImgGen(true); }} 
                      mb='1rem'
                      width='30%'
                      >
                      Show examples gallery
                    </Button> : null
                }
              </Box>
            {isSmallerThan800 === true
            ? <GenerationImageGallery 
                hidden={true}
                photos={
                  gallery_data.sort((a,b) => -(a.id - b.id)).map((item) => {
                    return {
                      key: item.id,
                      id: item.id,
                      src: item.value.value.img_url,
                      alt: item.value.value.error ?? 'yacht'
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
              error={getDrawResultLink()?.value?.value.error}
              saveToGalleryHandler={saveToGalleryHandler}
              onWriteNewDescription={() => setStartGen(false)}
              containerProps={{gridColumn: isSmallerThan800 ? '1 / 4' : '2/3'}} 
              onClickToGalleryAfterSave={() => {
                setStartGen(false);
                console.log('startGen1', startGen);
              }} 
              onClickToGalleryFromGenerate={() => {
                setImgGen(true);
              }} 
              sendMail={sendMailHandler}
            />
          : <GenerationImageGallery photos={
            gallery_data.sort((a,b) => -(a.id - b.id)).map((item) => {
                return {
                  key: item.id,
                  id: item.id,
                  src: item.value.value.img_url,
                  alt: item.value.value.error ?? 'yacht',
                }
              })
            }
            onWriteNewDescription={() => {
              setStartGen(false);
              setImgGen(false); 
            }} 
          />
        }
      </Box>
    </Center>
  );
})