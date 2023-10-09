import { AspectRatio, Box, Button, Checkbox, CircularProgress, CircularProgressLabel, HStack, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Skeleton, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosShareAlt } from "react-icons/io";
import { Backdrop } from './backdrop';
import { TelegramShareButton } from 'next-share'
import { useDebounceCallback } from "@react-hook/debounce";
import FileSaver from 'file-saver';


export const GenerationButton = React.memo(({ 
  onClick,
  variant='blackBgSquareSolid', 
  text = 'start creating',
  buttonProps = {},
  textProps = {},
  rightIcon = null,
  as,
  disabled = false,
}:{ 
  onClick?: () => void;
  variant?: string; 
  text?: any;
  buttonProps?: {};
  textProps?: {};
  rightIcon?: any;
  as?: any;
  disabled?: boolean;
}) => {
  return (<Button 
    as={as}
    variant={variant}
    w='100%'
    onClick={onClick} 
    isDisabled={disabled}
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
  onClickToGalleryFromGenerate,
  onClickToGalleryAfterSave,
  progress,
  error,
  saveToGalleryHandler,
  onWriteNewDescription,
  sendMail,
}:{
  src?: string;
  containerProps?: {};
  error?: string;
  onClickToGalleryFromGenerate?: () => void;
  onClickToGalleryAfterSave?: () => void;
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
  const [name, setName] = useState('');
  const [accountSocialNetwork, setAccountSocialNetwork] = useState('');
  const [allowProcessPersonalData, setAllowProcessPersonalData] = useState(false);
  

  const initialRef = useRef(null);

  const [isSmallerThan400] = useMediaQuery('(max-width: 400px)');

  useEffect(() => {
    if(error){
      setIsLoaded(true);
    }
  }, [error]);
  
  
  function save() {
    FileSaver.saveAs(src, "image.png");
  }

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
          <Box 
            // display='flex' 
            // flexDirection='row' 
            position='absolute' 
            sx={{
              top:'calc(50% - 5rem)', 
              left:'calc(50% - 2.5rem)',
              zIndex: 2,
            }}>
            { !isLoaded ?
              <CircularProgress 
                value={progress} 
                size='5rem' 
                isIndeterminate 
                color='blue.200' 
                trackColor='#656565' 
                thickness='0.2rem'
              >
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
            { error === undefined ?
              <AspectRatio ratio={16 / 9} w='100%' h='100%' overflow='hidden'>
                <Img
                  src={src} 
                  alt='generation image' 
                  w='100%' 
                  sx={{opacity: isLoaded ? 1 : 0}}
                  onLoad={() => setIsLoaded(progress===100)}
                  borderRadius='0.2rem'
                />
              </AspectRatio> :
              <Box display='flex' flexDirection='column' width="100%" justifyContent='center' alignItems='center'>
                <Text textStyle='errorTextTitle' align='center' mx='25%' >
                  Due to high load, the server was unable to process your request. Please try again
                </Text>
                <Text  textStyle='errorTextBlock' align='center' mx='30%'>
                  {`Error: ${error}`}
                </Text>
              </Box>
            }
            <Backdrop onClosePortal={() => setPortal(false)} portalOpen={portalOpen}>
              <>
              <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='center' bg='blue.300' p='1rem 1.5rem' overflow='hidden' borderRadius='0.2rem'>
                <Text textStyle='whiteTextShadow' align='center'>congrats art saved to gallery!</Text>
              </Box>
              <Button onClick={onClickToGalleryAfterSave} size='sm' alignSelf='flex-end' position='absolute' bottom='0.5rem' right='0.5rem'>regenerate image</Button></>
            </Backdrop>
          </Skeleton>
          <Box w='100%' display='flex' alignItems='center' justifyContent='center' flexDir='column'>
            <Box display='flex' flexDir='row' mb='0.5rem'>
              <GenerationButton 
                variant='grayBgSolid' 
                disabled={ progress<100 }
                text='download on your device' 
                textProps={{ px: isSmallerThan500 ? '2rem' : '3rem', mr: '0.5rem' }} 
                buttonProps={{ mr: '0.5rem' }} 
                onClick={save} 
              />
              <GenerationButton 
                variant='grayBgSolid' text='save to our gallery' 
                disabled={ !progress || progress<100 }
                onClick={() => {
                  saveToGalleryHandler(); 
                  setIsSaved(true); 
                  setPortal(true);
                }} 
              />
            </Box>
            <Box display='flex' flexDir='row'>

              <TelegramShareButton
                    url={src}
                    disabled={  !progress || progress < 100 }
                  >
                <GenerationButton 
                  as={Box}
                  variant='grayBgSolid' 
                  buttonProps={{ px: isSmallerThan500 ? '2.5rem' : '5rem' }} 
                  disabled={  !progress || progress < 100 }
                  // onClick={() => console.log(true)} 
                  rightIcon={
                    <IoIosShareAlt size={16} />}
                    text='share'
                  />
                    
                </TelegramShareButton>
                
              
              
              <GenerationButton 
                disabled={ !isLoaded }
                variant='blackBgSolid' 
                text='write a new description' 
                textProps={{ 
                  px: isSmallerThan500 ? '2.5rem' : '1rem'
                }} 
                onClick={onWriteNewDescription} 
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box textAlign='center'>
        <Button rightIcon={<IoIosArrowForward />} onClick={onClickToGalleryFromGenerate} mr='1rem'>go to gallery</Button>
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
                <Text textStyle='contactsDownMenu'>Name</Text>
                <Input focusBorderColor='button.100' variant='outline' ref={initialRef} fontSize='1rem' placeholder='Your name' value={name} 
                  onChange={(event) => setName(event.target.value)} size='sm' />
              </HStack>
              <HStack>
                <Text textStyle='contactsDownMenu'>Contact</Text>
                <Input focusBorderColor='button.100' variant='outline' fontSize='1rem' placeholder='Email or social:@username' value={accountSocialNetwork} onChange={(event) => setAccountSocialNetwork(event.target.value)} size='sm' />
              </HStack>
            </ModalBody>

            <ModalFooter>
              <Checkbox 
                size='md' 
                colorScheme='telegram' 
                // sx={{mr: '2rem'}}
                isChecked={allowProcessPersonalData}
                onChange={(event) => setAllowProcessPersonalData(event.target.checked)}
              >
                <Text textStyle='contactsDownMenu'>Consent to the processing of personal data</Text>
              </Checkbox>
              <GenerationButton 
                variant='blackBgSolid' 
                text='send' 
                disabled={!allowProcessPersonalData}
                buttonProps={{ 
                  width: '30%',
                }} 
                onClick={
                  async () => {
                    console.log('click');
                    if(name.trim() ==='' || accountSocialNetwork.trim()=== '') 
                      return;
                    
                    let msg = "Received contacts for communication:\n"
                    msg += ` Name: ${name.trim()}\n`
                    msg += ` Contact: ${accountSocialNetwork.trim()}\n`
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
