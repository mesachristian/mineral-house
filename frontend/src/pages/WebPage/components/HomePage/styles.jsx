import { 
    PRIMARY_WHITE,
    PRIMARY_DARK_BLUE 
} from "utilities/colors";

export const homeBody = {
    display: 'flex',
    position: 'absolute',
    top : 0,
    left : 0,
    zIndex: 2,
    width: '100vw',
    height: '100vh'
};

export const homeContentContainer = {
    width: '100%',
    paddingTop: '90px',
    paddingLeft: '90px',
    paddingRight: '90px'
};

export const homeContent = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
};

export const homeSectionContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent : 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
}

export const homeBtnsContainer = { 
    width : '100%', 
    display : 'flex', 
    justifyContent : 'space-between' 
}

export const showSolutionsBtnStyle = {
    borderRadius: 28, 
    width : '47%'
}

export const startBtnStyle = {
    borderRadius: 28, 
    width : '47%',
    transition: "background 0.6s, color 0.6s",
    '&:hover': {
        background: PRIMARY_DARK_BLUE,
        color: PRIMARY_WHITE
    },
}

