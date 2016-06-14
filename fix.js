/* 
Credit to fix suggestions from Marcus (no other info) and Carl Kibler
http://support.avocado.io/support/discussions/topics/6000037269

The rules are very specific to ensure they are fast, limit inadvertent
side effects, and have high priority.
*/

// Hide scrollbars showing up for nearly every individual message
var scrollFixNode = document.createTextNode(
	'#activities-list > li.activity-theirs { overflow:visible; }'
);

// Prevent the "every link but be youtube!" behavior in messages that mention links
var youtubeFixNode = document.createTextNode(
	'iframe[src*="youtube.com"], iframe[src*="youtube.com"]+br { display: none; }'
	
);

// Build a CSS style section and insert these into <head>
var styleNode = document.createElement('style');
styleNode.id = 'avocado-bugfix';
styleNode.type = 'text/css';
styleNode.appendChild(scrollFixNode);
styleNode.appendChild(youtubeFixNode);
document.head.appendChild(styleNode);