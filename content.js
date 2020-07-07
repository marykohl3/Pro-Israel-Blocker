// code adapted from https://github.com/teddylambert/PrisonBlock

walk(document.body);

function walk(node)
{
	var child, next;

	switch ( node.nodeType )
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3:
			replaceText(node);
			break;
	}
}

// replace text from websites that supply Pro-Israel brands and companies
function replaceText(textNode) {
  var val = textNode.nodeValue;
  var proIsraelRepTxt = "░░░PRO-ISRAEL BLOCK░░░"

  val = val.replace(/\bStarbucks\b/g, proIsraelRepTxt);
 val = val.replace(/\bThe Limited\b/g, proIsraelRepTxt);
 val = val.replace(/\bExpress\b/g, proIsraelRepTxt);
 val = val.replace(/\bVictoria's Secret\b/g, proIsraelRepTxt);
 val = val.replace(/\bBath and Body Works\b/g, proIsraelRepTxt);
 val = val.replace(/\bBath & Body Works\b/g, proIsraelRepTxt);
 val = val.replace(/\bThe Home Depot\b/g, proIsraelRepTxt);
 val = val.replace(/\bHome Depot\b/g, proIsraelRepTxt);
 val = val.replace(/\bDisney\b/g, proIsraelRepTxt);
 val = val.replace(/\bDisney+\b/g, proIsraelRepTxt);
 val = val.replace(/\bDisneyPlus\b/g, proIsraelRepTxt);
 val = val.replace(/\bCoca Cola\b/g, proIsraelRepTxt);
 val = val.replace(/\bCoke\b/g, proIsraelRepTxt);
 val = val.replace(/\bCoca-Cola\b/g, proIsraelRepTxt);
 val = val.replace(/\bDiet Coke\b/g, proIsraelRepTxt);
 val = val.replace(/\bEstee Lauder\b/g, proIsraelRepTxt);
 val = val.replace(/\Sara Lee\b/g, proIsraelRepTxt);
 val = val.replace(/\bFox Television\b/g, proIsraelRepTxt);
 val = val.replace(/\bFox Entertainment\b/g, proIsraelRepTxt);
 val = val.replace(/\bNestle\b/g, proIsraelRepTxt);
 val = val.replace(/\bNESTLE\b/g, proIsraelRepTxt);
 val = val.replace(/\bIBM\b/g, proIsraelRepTxt);
 val = val.replace(/\bHuggies\b/g, proIsraelRepTxt);
 val = val.replace(/\bKotex\b/g, proIsraelRepTxt);
 val = val.replace(/\bKleenex\b/g, proIsraelRepTxt);
 val = val.replace(/\bNokia\b/g, proIsraelRepTxt);
 val = val.replace(/\bTimberland\b/g, proIsraelRepTxt);
 val = val.replace(/\bBen and Jerry's\b/g, proIsraelRepTxt);
 val = val.replace(/\bBen & Jerry's\b/g, proIsraelRepTxt);
 val = val.replace(/\bSodaStream\b/g, proIsraelRepTxt);
 val = val.replace(/\bSabra\b/g, proIsraelRepTxt);
 val = val.replace(/\bAHAVA\b/g, proIsraelRepTxt);
 val = val.replace(/\bCalvin Klein\b/g, proIsraelRepTxt);
 val = val.replace(/\bCALVIN KLEIN\b/g, proIsraelRepTxt);
 val = val.replace(/\bAMAV\b/g, proIsraelRepTxt);
 val = val.replace(/\bNestlé\b/g, proIsraelRepTxt);
 val = val.replace(/\bVolvo\b/g, proIsraelRepTxt);

  textNode.nodeValue = val;
}
