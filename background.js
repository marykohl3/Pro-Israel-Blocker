/*
Mary Kohl
code adapted from https://github.com/teddylambert/PrisonBlock
*/

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

  var blockedCompanies = "https://raw.githubusercontent.com/marykohl3/Anti-Apartheid-Blocker/master/blockedCompanies.json"
  var blockedHosts = null;

  async function updateSites() {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
          blockedHosts = null;
          resolve();
          return;
        }
        blockedHosts = JSON.parse(xhr.responseText);
        resolve();
      });
      xhr.open("GET", blockedCompanies);
      xhr.send();
    });
  }

  chrome.tabs.onUpdated.addListener(async (tabId, info, changeInfo) => {
    if (info.status === 'complete') {
      var url = new URL(changeInfo.url);
      hostStr = String(url.hostname);
      if (!blockedHosts) await updateSites();
      if (!blockedHosts) return;
      if (hostStr in blockedHosts) {
        date = new Date();
        if (date.getTime() >= (blockedHosts[hostStr] + 3600000)) {
          var r = confirm(' STOP! \nThis company is complicit in violations of Palestinian rights.\nPlease try to find an alternative brand and company to support.\n\nClick OK to continue\nClick CANCEL to go back\n\nGo to http://bdslist.org/ to learn more');
          if(r == false) {
            chrome.tabs.goBack();
          }
          blockedHosts[hostStr] = date.getTime();
        }
      }
    }
  });


  updateSites();
