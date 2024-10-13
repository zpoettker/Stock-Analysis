function getQueryParam(param) {
    let urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(param);
}

function readSymbolFromQueryString() {
    return getQueryParam('tvwidgetsymbol');
}

function cloneTemplateInto(templateId, targetId, rewrites) {
    const tmpl = document.querySelector(`#${templateId}`);
    if(!tmpl) return;
    const target = document.querySelector(`#${targetId}`);
    if(!target) return;
    target.innerText = '';
    const clone = tmpl.content.cloneNode(true);
    if (rewrites) {
        const script = clone.querySelector('script');
        script.textContent = rewrites(script.textContent);
    }
    target.appendChild(clone);
}

const symbol = readSymbolFromQueryString() ||'NASDAQ:TSLA';

function setSymbol(scriptContent){
    return scriptContent.replace(/"symbol": "([^"]*)"/g, () => {
        return `"symbol": "${symbol}"`;
    });
}

cloneTemplateInto('symbol-info-template', 'symbol-info', setSymbol);
cloneTemplateInto('advanced-chart-template', 'advanced-chart', setSymbol);
cloneTemplateInto('company-profile-template', 'company-profile', setSymbol);
cloneTemplateInto('fundamental-data-template', 'fundamental-data', setSymbol);
cloneTemplateInto('technical-analysis-template', 'technical-analysis', setSymbol);
cloneTemplateInto('top-stories-template', 'top-stories', setSymbol);

const elements = document.querySelectorAll('.btn');

// Event
elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

        if(command == 'createLink' || command == 'insertImage') {
            let url = prompt('Enter the link here:', 'https://');
            document.execCommand(command, false, url);
        } else {
            document.execCommand(command, false, null);
        }
    });
});

const search1 = document.getElementById('search');

function searchTicker() {
    if(search1.value == "MSFT"){
    window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NASDAQ%3AMSFT';
    }
    else if(search1.value == "META" || search1.value == "Facebook" || search1.value == "meta"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NASDAQ%3AMETA';
        }
    else if(search1.value == "SHOP"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NYSE%3ASHOP';
    }
    else if(search1.value == "QQQ"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NASDAQ%3AQQQ';
        }
    else if(search1.value == "GME"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NYSE%3AGME';
        }
    else if(search1.value == "COIN"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NASDAQ%3ACOIN';
        }
    else if(search1.value == "WMT"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NYSE%3AWMT';
    }
    else if(search1.value == "TSLA"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NASDAQ%3ATSLA';
        }
    else if(search1.value == "AAPL"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NASDAQ%3AAAPL';
        }
    else if(search1.value == "NVDA"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NASDAQ%3ANVDA';
        }
    else if(search1.value == "AMZN"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NASDAQ%3AAMZN';
        }
    else if(search1.value == "GOOGL"){
        window.location = 'https://zpoettker.github.io/Stock-Analysis/?tvwidgetsymbol=NASDAQ%3AGOOGL';
        }
}

search1.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' || event.key === 'Return') {
      searchTicker();
    }
  });
