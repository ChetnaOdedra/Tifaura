
import { share } from 'rxjs';
import { name as appName } from '../../app.json';

const base_assets_path = "../../assets/";
const MAIN_URL = "https://api.twilightfinland.eu/";
const STAGGING_URL = "https://admin.twilightfinland.eu/";


const Constants = {

    PHONE_MAX_LENGTH: 10,
    PAGINATION_LIMIT:10,
    ANIMATION_TIME_MODEL : 100,
    APP_VERSION:"https://api.twilightfinland.eu/appversion",
    BASE_URL : MAIN_URL+"appfunction",
    API_BASE_URL:STAGGING_URL+"graphql",

    appData:{
        applicationName: appName
    },    

    ScreenNames : {
        LOGIN: "Login",
        Registration: "Registration",
    } ,
    toastTypes:{
        SUCCESS: "success",
        DANGER: "error",
        INFO: "info",
        WARNING: "warning",
    },
    fontNames : {
        SEGOE_UI: "segoe_ui",
        SEGOE_UI_BOLD: "segoe_ui_bold",
        SEGOE_UI_IOS:"SegoeUI",
        SEGOE_UI_BOLD_IOS: "SegoeUI-Bold",
    } ,

    imagePath :{
        transparent_logo: require(base_assets_path+"transparent_logo.png"),
        thank_you: require(base_assets_path+"ic_thankyou.png"),
        profile: require(base_assets_path+"profile.png"),
        camera: require(base_assets_path+"camera.png"),
        pickCamera: require(base_assets_path+"pick_camera.png"),
        pickGallery: require(base_assets_path+"gallary.png"),
        menu: require(base_assets_path+"menu.png"),
        home: require(base_assets_path+"home.png"),
        earning: require(base_assets_path+"earning.png"),
        setting: require(base_assets_path+"settings.png"),
        contact_us: require(base_assets_path+"contact.png"),
        privacy: require(base_assets_path+"privacy.png"),
        terms: require(base_assets_path+"terms.png"),
        logout: require(base_assets_path+"logout.png"),
        delete_account: require(base_assets_path+"delete_account.png"),
        ratting: require(base_assets_path+"rating.png"),
        share: require(base_assets_path+"share.png"),

    },

    dateFormates :{
        dd:"dd",
        mm:"MM",
        yyyy:"yyyy",
        dd_mm_yyyy:"dd-MM-yyyy",
        yyyy_mm_dd :"yyyy-mm-dd",
        do_mmm_yyyy:"do MMM yyyy",
        do_mmm_yyyy_HH_mm_ss : "do MMM yyyy HH:mm:ss",
        do_mmm_yyyy_HH_mm : "do MMM yyyy HH:mm",
        do_mmm_yyyy_hh_mm_a : "do MMM yyyy hh:mm a"

    },

    drawerIndex:{
        HOME:1,
        MY_ACCOUNT : 2,
        EARNING : 3 , 
        SETTINGS :4 , 
        CONTACT_US : 5 , 
        PRIVACY_POLICY :6 ,
        TERMS_CONDITION :7,
        SHARE_APP : 8 , 
        RATE_US :9,
        LOGOUT : 10,
        DELETE_ACCOUNT :11,
    }

     
}

export default Constants;
