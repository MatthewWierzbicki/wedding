import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import SayYes from '../../assets/say-yes.jpeg';
import cat from '../../assets/cat.svg';
import arrowDown from '../../assets/arrow-down.svg';
import { useIsMobile } from '../../utils/hooks/useIsMobile';

export const Home = () => {
  const isMobile = useIsMobile();
  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100vw',
          height: '900px',
          background: `url(${SayYes})`,
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? '-150px center' : 'center',
        }}
      >
        <Stack
          sx={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            06.20.26
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={cat}
              alt="cat"
              width={isMobile ? 60 : 110}
              height={isMobile ? 60 : 110}
              sx={{
                position: 'absolute',
                bottom: isMobile ? 17 : 41,
                right: isMobile ? 42 : 88,
              }}
            />
            <Typography variant={isMobile ? 'h3' : 'h1'}>
              Matt + Sylvia
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
            }}
            component="img"
            src={arrowDown}
            alt="arrowDown"
            width={100}
            height={100}
          />
        </Stack>
      </Box>
      <Stack sx={{ backgroundColor: '#ffe5d9', p: 6, gap: 4 }}>
        <Typography variant="h4" sx={{ color: 'black' }}>
          The Details
        </Typography>
        <Typography variant="body1">
          Skate ipsum dolor sit amet, smith grind nosegrind pool
          nosepicker backside. Gap disaster kickflip rail deck. Kevin
          Harris downhill slappy boardslide camel back. Indy grab hand
          rail 360 half-flip alley oop. Pressure flip casper slide
          invert pump nose-bump Vision. Alley oop stalefish switch
          helipop carve. Cess slide pivot gap bone air ledge. 360 nose
          slide wall ride backside sponsored. Concave nose-bump Geoff
          Rowley boneless hospital flip axle set. Mute-air grind
          nosebone finger flip helipop. Lipslide frigid air kickflip
          regular footed crooked grind. Hard flip The Wedge cab flip
          slob air melancholy tuna-flip. Slappy gnarly Jordan Richter
          crail slide 270 ho-ho. 720 coping blunt 540 180. Noseblunt
          slide gnarly nosegrind skater transition.
        </Typography>
        <Typography variant="body1">
          Death box boned out switch goofy footed betty. Street gnarly
          stalefish egg plant casper. Stoked pressure flip skate or
          die cess slide street. Plan B kidney 360 flail lipslide
          trucks. Rails risers pop shove-it rock and roll hang-up.
          Casper durometer birdie darkslide death box. Nosepicker drop
          in judo air gap downhill. Berm hurricane rocket air lip
          Vision hand rail. Tuna-flip berm birdie gnar bucket coper.
          Boneless bone air alley oop yeah judo air. Risers boardslide
          Hugh Bod Boyle nosepicker trucks fakie. Hand rail salad
          grind Tim May snake no comply egg plant. Steps drop in
          mute-air lipslide bruised heel. Pivot indy grab salad grind
          900 goofy footed. Dude Steve Olson slap maxwell crail grab
          judo air kidney. Air nose slide varial melancholy salad
          grind.
        </Typography>
      </Stack>
    </Stack>
  );
};
