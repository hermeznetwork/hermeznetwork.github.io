import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
  section: {
    padding: '96px 72px'
  },
  section1: {
    backgroundImage: 'url("../../assets/images/home/section1.svg")',
    display: 'flex',
    '& > div': {
      marginRight: 'auto',
      marginLeft: 0
    }
  },
  section2: {
    display: 'flex',
    flexDirection: 'column',
    '& >:first-child': {
      textAlign: 'center',
      marginBottom: '106px'
    },
    '& >:last-child': {
      margin: '124px auto 0',
      height: '42px'
    }
  },
  section2Image1: {
    width: '142px',
    height: '147px'
  },
  section2Image2: {
    width: '162px',
    height: '147px'
  },
  section2Image3: {
    width: '141px',
    height: '147px'
  },
  section2Text: {
    width: '245px',
    margin: '50px auto 0',
    fontWeight: '500',
    fontSize: '23px',
    lineHeight: '35px'
  },
  section3: {
    backgroundColor: '#f6f7fa'
  },
  section4: {
  },
  section5: {
  },
  section6: {
  },
  section7: {
  },
  row: {
    display: 'flex'
  },
  col2: {
    width: '50%',
    marginLeft: 'auto'
  },
  col3: {
    margin: 'auto',
    textAlign: 'center',
    width: '33%'
  },
  buttonLink: {
    padding: '26px 28px',
    fontWeight: '700',
    // padding: `${theme.spacing(3)}px ${theme.spacing(3.5)}px`,
    // fontWeight: theme.fontWeights.bold,
    margin: 'auto',
    borderRadius: 26,
    cursor: 'pointer',
    width: '204px',
    height: '70px',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      // background: theme.palette.primary.dark
    }
  },
  buttonLinkIcon: {
    width: '13px',
    height: '12px',
    marginLeft: '12px'
  },
  primary: {
    border: '1px solid #e75a2b',
    background: '#e75a2b',
    color: 'white',
    marginTop: '40px',
    // border: `1px solid ${theme.palette.orange.main}`,
    // background: theme.palette.orange.main,
    // color: theme.palette.white,
    // marginTop: theme.spacing(5),
    display: 'block'
  },
  secondary: {
    border: '1px solid #dee0e9',
    background: 'white',
    color: '#667285'
    // border: `1px solid ${theme.palette.primary.main}`,
    // background: theme.palette.white,
    // color: theme.palette.gray.main
  }
}))

export default useHomeStyles

// primary: {
//     light: '#f6f7fa',
//     main: '#dee0e9'
//   },
//   white: '#ffffff',
//   black: '#2b2b2b',
//   gray: {
//     main: '#667285',
//     lighter: '#8d95a3'
//   },
//   orange: {
//     main: '#e75a2b'
//   }
