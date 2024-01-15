mac = {
  // Defines a ~valid MAC address
  // From https://stackoverflow.com/a/4260512/1788943
  format: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,

  lookup: {
    contextMenu: {
      id: 'mac.lookup',
      title: 'Lookup this MAC address',
      contexts: ['selection'],
    },

    // Opens a new tab showing info about the selected MAC address
    openNewTab: (param) => {
      const macAddress = param.selectionText;
      if (mac.format.test(macAddress)) chrome.tabs.create({url: `https://www.macvendorlookup.com/search/${macAddress}`});
    },
  }
};

chrome.contextMenus.create(mac.lookup.contextMenu);
chrome.contextMenus.onClicked.addListener(mac.lookup.openNewTab);