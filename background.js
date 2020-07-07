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

  var proIsraelCompanies = "https://raw.githubusercontent.com/marykohl3/Pro-Israel-Blocker/master/proIsraelCompanies.json"
  var proIsraelHosts = null;

  async function updateSites() {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
          proIsraelHosts = null;
          resolve();
          return;
        }
        proIsraelHosts = JSON.parse(xhr.responseText);
        resolve();
      });
      xhr.open("GET", proIsraelCompanies);
      xhr.send();
    });
  }

  chrome.tabs.onUpdated.addListener(async (tabId, info, changeInfo) => {
    if (info.status === 'complete') {
      var url = new URL(changeInfo.url);
      hostString = String(url.hostname);
      if (!proIsraelHosts) await updateSites();
      if (!proIsraelHosts) return;
      if (hostString in proIsraelHosts) {
        d = new Date();
        curTime = d.getTime();
        if (curTime >= (proIsraelHosts[hostString] + 3600000)) {
          var r = confirm(' STOP! \n This company is pro-Israel.\n Please try to find an alternative brand and company to support.\n\nClick OK to continue\nClick CANCEL to go back\n\nGo to http://bdslist.org/ to learn more');
          if(r == false) {
            chrome.tabs.goBack();
          }
          proIsraelHosts[hostString] = curTime;
        }
      }
    }
  });


  updateSites();
