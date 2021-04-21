import css from 'styled-jsx/css'

export default css.global`
// * {
//     background: #000 !important;
//     color: #0f0 !important;
//     outline: solid #f00 1px !important;
//   }
   
    body{
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        font-family: 'Source Sans Pro'
    }

    li:hover{
       
            color: #FFF;
            transition: 0.5s;
            cursor: pointer;
        
    }

    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-Black.eot');
        src: url('/fonts/SourceSansPro-Black.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-Black.woff2') format('woff2'),
            url('/fonts/SourceSansPro-Black.woff') format('woff'),
            url('/fonts/SourceSansPro-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-BlackIt.eot');
        src: url('/fonts/SourceSansPro-BlackIt.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-BlackIt.woff2') format('woff2'),
            url('/fonts/SourceSansPro-BlackIt.woff') format('woff'),
            url('/fonts/SourceSansPro-BlackIt.ttf') format('truetype');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-Bold.eot');
        src: url('/fonts/SourceSansPro-Bold.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-Bold.woff2') format('woff2'),
            url('/fonts/SourceSansPro-Bold.woff') format('woff'),
            url('/fonts/SourceSansPro-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-Regular.eot');
        src: url('/fonts/SourceSansPro-Regular.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-Regular.woff2') format('woff2'),
            url('/fonts/SourceSansPro-Regular.woff') format('woff'),
            url('/fonts/SourceSansPro-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-BoldIt.eot');
        src: url('/fonts/SourceSansPro-BoldIt.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-BoldIt.woff2') format('woff2'),
            url('/fonts/SourceSansPro-BoldIt.woff') format('woff'),
            url('/fonts/SourceSansPro-BoldIt.ttf') format('truetype');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-ExtraLightIt.eot');
        src: url('/fonts/SourceSansPro-ExtraLightIt.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-ExtraLightIt.woff2') format('woff2'),
            url('/fonts/SourceSansPro-ExtraLightIt.woff') format('woff'),
            url('/fonts/SourceSansPro-ExtraLightIt.ttf') format('truetype');
        font-weight: 200;
        font-style: italic;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-It.eot');
        src: url('/fonts/SourceSansPro-It.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-It.woff2') format('woff2'),
            url('/fonts/SourceSansPro-It.woff') format('woff'),
            url('/fonts/SourceSansPro-It.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-ExtraLight.eot');
        src: url('/fonts/SourceSansPro-ExtraLight.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-ExtraLight.woff2') format('woff2'),
            url('/fonts/SourceSansPro-ExtraLight.woff') format('woff'),
            url('/fonts/SourceSansPro-ExtraLight.ttf') format('truetype');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-Light.eot');
        src: url('/fonts/SourceSansPro-Light.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-Light.woff2') format('woff2'),
            url('/fonts/SourceSansPro-Light.woff') format('woff'),
            url('/fonts/SourceSansPro-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-SemiboldIt.eot');
        src: url('/fonts/SourceSansPro-SemiboldIt.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-SemiboldIt.woff2') format('woff2'),
            url('/fonts/SourceSansPro-SemiboldIt.woff') format('woff'),
            url('/fonts/SourceSansPro-SemiboldIt.ttf') format('truetype');
        font-weight: 600;
        font-style: italic;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-LightIt.eot');
        src: url('/fonts/SourceSansPro-LightIt.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-LightIt.woff2') format('woff2'),
            url('/fonts/SourceSansPro-LightIt.woff') format('woff'),
            url('/fonts/SourceSansPro-LightIt.ttf') format('truetype');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('/fonts/SourceSansPro-Semibold.eot');
        src: url('/fonts/SourceSansPro-Semibold.eot?#iefix') format('embedded-opentype'),
            url('/fonts/SourceSansPro-Semibold.woff2') format('woff2'),
            url('/fonts/SourceSansPro-Semibold.woff') format('woff'),
            url('/fonts/SourceSansPro-Semibold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
`