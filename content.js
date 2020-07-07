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
  var repTxt = "░░░ANTI-APARTHEID BLOCKER░░░"

  val = val.replace(/\bStarbucks\b/g, repTxt);
 val = val.replace(/\bThe Limited\b/g, repTxt);
 val = val.replace(/\bExpress\b/g, repTxt);
 val = val.replace(/\bVictoria's Secret\b/g, repTxt);
 val = val.replace(/\bBath and Body Works\b/g, repTxt);
 val = val.replace(/\bBath & Body Works\b/g, repTxt);
 val = val.replace(/\bThe Home Depot\b/g, repTxt);
 val = val.replace(/\bHome Depot\b/g, repTxt);
 val = val.replace(/\bDisney\b/g, repTxt);
 val = val.replace(/\bDisney+\b/g, repTxt);
 val = val.replace(/\bDisneyPlus\b/g, repTxt);
 val = val.replace(/\bCoca Cola\b/g, repTxt);
 val = val.replace(/\bCoke\b/g, repTxt);
 val = val.replace(/\bCoca-Cola\b/g, repTxt);
 val = val.replace(/\bDiet Coke\b/g, repTxt);
 val = val.replace(/\bEstee Lauder\b/g, repTxt);
 val = val.replace(/\Sara Lee\b/g, repTxt);
 val = val.replace(/\bFox Television\b/g, repTxt);
 val = val.replace(/\bFox Entertainment\b/g, repTxt);
 val = val.replace(/\bNestle\b/g, repTxt);
 val = val.replace(/\bNESTLE\b/g, repTxt);
 val = val.replace(/\bIBM\b/g, repTxt);
 val = val.replace(/\bHuggies\b/g, repTxt);
 val = val.replace(/\bKotex\b/g, repTxt);
 val = val.replace(/\bKleenex\b/g, repTxt);
 val = val.replace(/\bNokia\b/g, repTxt);
 val = val.replace(/\bTimberland\b/g, repTxt);
 val = val.replace(/\bBen and Jerry's\b/g, repTxt);
 val = val.replace(/\bBen & Jerry's\b/g, repTxt);
 val = val.replace(/\bSodaStream\b/g, repTxt);
 val = val.replace(/\bSabra\b/g, repTxt);
 val = val.replace(/\bAHAVA\b/g, repTxt);
 val = val.replace(/\bCalvin Klein\b/g, repTxt);
 val = val.replace(/\bCALVIN KLEIN\b/g, repTxt);
 val = val.replace(/\bAMAV\b/g, repTxt);
 val = val.replace(/\bNestlé\b/g, repTxt);
 val = val.replace(/\bVolvo\b/g, repTxt);

  textNode.nodeValue = val;
}
