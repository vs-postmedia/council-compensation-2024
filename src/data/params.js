const params = {
    appId: 'app',
    clientId: 'council-compensation-2024', // unique for each dataset
    cloudTableId: 'fbc9604c-68ce-11f0-b1b2-370f1b17ed2a', // find in embed tab
    // below here probably won’t change 
    tableId: 'cloudtable', // DOM element for the table
    cloudTableDomain: 'vs-postmedia-a.cloudtables.me',
    // should probably have 3-4 servers in the pool...
    serverPool: [
        'vs-postmedia-a.cloudtables.me'
        // 'vs-postmedia-b.cloudtables.me'
    ],
    apiKey: 'kcZqiHL7MiUCi1waLZYN1vkz' // read-only    
};

export default params;