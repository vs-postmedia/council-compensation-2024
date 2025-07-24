import CloudTablesApi from 'cloudtables-api';;
import params from './data/params.js';

// CSS
import normalize from './css/normalize.css';
import postmedia from './css/postmedia.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';
import cloudtable from'./css/cloudtable.css';

// FONTS
import'./fonts/Shift-Bold.otf';
import'./fonts/Shift-BoldItalic.otf';
import'./fonts/BentonSansCond-Regular.otf';
import'./fonts/BentonSansCond-RegItalic.otf';
import'./fonts/BentonSansCond-Bold.otf';


// VARS
const server = params.serverPool[0];


// JS FUNCTIONS
const init = async () => {

    // load the unfiltered cloudtable
    loadCloudTable('');
};


async function loadCloudTable(agency) {
    // grab the ct api instance
    let api = new CloudTablesApi(params.apiKey, {
        clientName: params.clientId,     // Client's name - optional
        domain: params.serverPool[0],    // CloudTables host
    });


    console.log(`https://${server}/io/loader/${params.cloudTableId}/table/d`)
    // get a cloudtables api token
    let token = await api.token();
    // build the script tag for the table
    let script = document.createElement('script');
    script.src = `https://${server}/io/loader/${params.cloudTableId}/table/d`;
    script.setAttribute('data-token', token);
    script.setAttribute('data-insert', params.tableId);
    script.setAttribute('data-clientId', params.clientId);

    // insert the script tag to load the table
    let app = document.getElementById(params.appId).appendChild(script);
}

// KICK *SHT OFF!!!
init();