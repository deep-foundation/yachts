import { AspectRatio, Box, Button, Checkbox, CircularProgress, CircularProgressLabel, HStack, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Skeleton, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { IoIosArrowForward, IoIosShareAlt } from "react-icons/io";
import { Backdrop } from './backdrop';
import { TelegramShareButton } from 'next-share'
import { useDebounceCallback } from "@react-hook/debounce";


export const GenerationButton = React.memo(({ 
  onClick,
  variant='blackBgSquareSolid', 
  text = 'start creating',
  buttonProps = {},
  textProps = {},
  rightIcon = null,
  as,
}:{ 
  onClick?: () => void;
  variant?: string; 
  text?: any;
  buttonProps?: {};
  textProps?: {};
  rightIcon?: any;
  as?: any;
}) => {
  return (<Button 
    as={as}
    variant={variant}
    w='100%'
    onClick={onClick} 
    size='sm'
    rightIcon={rightIcon}
    {...buttonProps}
    >
      <Text {...textProps}>{text}</Text>
    </Button>
  )
})


export const GenerationImage = React.memo(({
  src = '/first.webp',
  containerProps = {},
  onClickToGallery,
  progress,
  saveToGalleryHandler,
  onWriteNewDescription,
  sendMail,
}:{
  src?: string;
  containerProps?: {};
  onClickToGallery?: () => void;
  progress: number;
  saveToGalleryHandler: () => void;
  onWriteNewDescription?: () => void;
  sendMail: any;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [portalOpen, setPortal] = useState(false);
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [youtube, setYoutube] = useState('');
  const [telegram, setTelegram] = useState('');
  const [instagram, setInstagram] = useState('');
  

  const initialRef = useRef(null);

  const [isSmallerThan400] = useMediaQuery('(max-width: 400px)');

  return (<Box 
      display='flex' flexDir='column' 
      alignItems='center' 
      justifyContent='flex-start' 
      w='100%' h='100%' 
      {...containerProps}
    >
      <Box 
        w={isSmallerThan800 ? '100%' : 'calc(100% - 4rem)'} 
        h='max-content' 
        border='thin solid #d7d7d7' 
        p={isSmallerThan800 ? '0.5rem' : '2rem'} 
        borderRadius='0.2rem' 
        mb='1rem' 
        position='relative'
      >
        <Box position='relative' w='100%' h='100%'>
          <Box display='flex' flexDirection='row' position='absolute' bottom={isSmallerThan500 ? '2.5rem' : '2rem'} right='0.5rem'>
            {progress<100 ?
              <CircularProgress value={progress} size={isSmallerThan500 ? '2rem' : '3rem'} isIndeterminate color='button.100' thickness='0.1rem'>
                <CircularProgressLabel>{progress}%</CircularProgressLabel>
              </CircularProgress> : null
            }
          </Box>
          <Skeleton
            position='relative'
            height='max-content'
            width='100%'
            isLoaded={isLoaded}
            startColor='blue.100' endColor='blue.300'
            fadeDuration={1}
            overflow='hidden'
            speed={2}
            mb={isSmallerThan800 ? '0.5rem' : '1.5rem'}
          >
            <AspectRatio ratio={16 / 9} w='100%' h='100%' overflow='hidden'>
              <Img
                src={src} 
                alt='generation image' 
                w='100%' 
                sx={{opacity: isLoaded ? 1 : 0}}
                onLoad={() => setIsLoaded(progress===100)}
                borderRadius='0.2rem'
              />
            </AspectRatio>
            <Backdrop onClosePortal={() => setPortal(false)} portalOpen={portalOpen}>
              <>
              <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='center' bg='blue.300' p='1rem 1.5rem' overflow='hidden' borderRadius='0.2rem'>
                <Text textStyle='whiteTextShadow' align='center'>congrats art saved to gallery!</Text>
              </Box>
              <Button onClick={onClickToGallery} size='sm' alignSelf='flex-end' position='absolute' bottom='0.5rem' right='0.5rem'>regenerate image</Button></>
            </Backdrop>
          </Skeleton>
          <Box w='100%' display='flex' alignItems='center' justifyContent='center' flexDir='column'>
            <Box display='flex' flexDir='row' mb='0.5rem'>
              {/* <GenerationButton variant='grayBgSolid' text='download on your device' textProps={{ px: isSmallerThan500 ? '2rem' : '3rem', mr: '0.5rem' }} buttonProps={{ mr: '0.5rem' }} onClick={() => console.log(true)} /> */}
              <GenerationButton 
                buttonProps={{isDisabled: isSaved}} 
                variant='grayBgSolid' text='save to our gallery' 
                onClick={() => {
                  saveToGalleryHandler(); 
                  setIsSaved(true); 
                  setPortal(true);
                }} 
              />
            </Box>
            <Box display='flex' flexDir='row'>

              <GenerationButton 
                as={Box}
                variant='grayBgSolid' 
                buttonProps={{ mr: '0.5rem' }} 
                onClick={() => console.log(true)} 
                rightIcon={<TelegramShareButton
                    url={src}
                  >
                    <IoIosShareAlt size={16} />
                  </TelegramShareButton>
                } 
                text='share'
              />
              
              <GenerationButton 
                variant='blackBgSolid' 
                text='write a new description' 
                textProps={{ 
                  px: isSmallerThan500 ? '2.5rem' : '5rem' 
                }} 
                onClick={onWriteNewDescription} 
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box textAlign='center'>
        <Button rightIcon={<IoIosArrowForward />} onClick={onClickToGallery} mr='1rem'>go to gallery</Button>
        <Button variant='link' onClick={onOpen}><Text textStyle='downMenu'>Leave contacts</Text></Button>
        <Modal isOpen={isOpen} onClose={onClose} size={isSmallerThan400 ? 'xs' : 'md'} initialFocusRef={initialRef} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader sx={{pt: '2rem'}}>
              <Text textStyle='regularTextBlock' align='center'>Enter your name and email address or a link to your account on any social network</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody 
              display='flex' 
              flexDirection='column'
              sx={{
                '&>*:not(:last-child)': {
                  mb: '1rem',
                }
              }}
            >
              <HStack>
                <Text textStyle='contactsDownMenu'>YouTube</Text>
                <Input focusBorderColor='button.100' variant='outline' ref={initialRef} fontSize='1rem' placeholder='@youTubeNickName' value={youtube} 
                  onChange={(event) => setYoutube(event.target.value)} size='sm' />
              </HStack>
              <HStack>
                <Text textStyle='contactsDownMenu'>Telegram</Text>
                <Input focusBorderColor='button.100' variant='outline' fontSize='1rem' placeholder='@telegramNickName' value={telegram} onChange={(event) => setTelegram(event.target.value)} size='sm' />
              </HStack>
              <HStack>
                <Text textStyle='contactsDownMenu'>Instagram</Text>
                <Input focusBorderColor='button.100' variant='outline' fontSize='1rem' placeholder='@instagramNickName' value={instagram} onChange={(event) => setInstagram(event.target.value)} size='sm' />
              </HStack>
            </ModalBody>

            <ModalFooter>
              <Checkbox 
                aria-label='Consent to the processing of personal data' 
                size='md' 
                colorScheme='button' 
                defaultChecked sx={{mr: '2rem'}}
              >
                <Text textStyle='contactsDownMenu'>Consent to the processing of personal data</Text>
              </Checkbox>
              <GenerationButton 
                variant='blackBgSolid' 
                text='send' 
                buttonProps={{ 
                  width: '30%',
                }} 
                onClick={
                  async () => {
                    if(youtube.trim()+telegram.trim()+instagram.trim()=== '') 
                      return;
                    
                    let msg = " Received contacts for communication:\n"
                    if (youtube.trim()) {
                      msg += ` YouTube: ${youtube.trim()}\n`
                    }
                    if (telegram.trim()) {
                      msg += ` Telegram: ${telegram.trim()}\n`
                    }
                    if (instagram.trim()) {
                      msg += ` Instagram: ${instagram.trim()}\n`
                  }
                  await sendMail(msg);
                  onClose();
                } 
              }
              />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  ) 
})
