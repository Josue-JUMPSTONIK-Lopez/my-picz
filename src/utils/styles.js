export const styles={
    SignContainer:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e5e5f7',
        opacity: '0.8',
        backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)',
        backgroundSize: '10px 10px',
    },
    MainContainer:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#e5e5f7',
        opacity: '0.8',
        backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)',
        backgroundSize: '10px 10px',
    },
    Form:{
        backgroundColor: '#fafafe',
        borderRadius: '10px',
        margin: '40px',
        padding: '25px 20px 10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
    },
    btnReturnSingUp:{
        alignSelf: 'start',
        position: 'relative',
        top: '-50px',
        left: '50px'
    },
    btnReturnSingIn:{
        alignSelf: 'start',
        position: 'relative',
        top: '-130px',
        left: '50px'
    },
    btnMainContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        gap: '40px'
    },
    HomeContainer:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e5e5f7',
        opacity: '0.8',
        backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)',
        backgroundSize: '10px 10px',
    },
    HomeHeaderContainer:{
        width: '100%',
        height: '30vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000',
        padding: '10px',
    },
    ProfileStatsContainer:{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },
    avatar:{ 
        width: 88, 
        height: 88
    },
    ProfileDescriptionContainer:{
        marginTop: '10px',
        widows: '100%'
    },
    ProfileActionFunction:{
        width: '100%',
        display: 'flex',
    },
    ProfileBottomContainer:{
        display: 'flex',
        width: '100%',
        position: 'absolute',
        bottom: '0'
    },
    HomeGridContainer:{
        width: '100%',
        height: '70vh',
        backgroundColor: '#000',
        padding: '10px',
        overflow: 'scroll'
    }


}