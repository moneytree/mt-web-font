/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-selection-validation-tick': '&#xe925;',
		'icon-delete-cross': '&#xe926;',
		'icon-checkmark-unselected': '&#xe927;',
		'icon-checkmark-selected': '&#xe928;',
		'icon-search-magnifying-glass': '&#xe929;',
		'icon-settings-thin-o': '&#xe924;',
		'icon-account-balances-o': '&#xe922;',
		'icon-points-small-o': '&#xe923;',
		'icon-settings-o': '&#xe921;',
		'icon-home-o': '&#xe91f;',
		'icon-vault-o': '&#xe920;',
		'icon-spinner-new': '&#xe91e;',
		'icon-vacuum': '&#xe91c;',
		'icon-clear-all-o': '&#xe91c;',
		'icon-heart': '&#xe91d;',
		'icon-welcome-o': '&#xe91d;',
		'icon-cog': '&#xe91b;',
		'icon-cross-circle': '&#xe91a;',
		'icon-chibi-icon-square': '&#xe919;',
		'icon-chibi-circle': '&#xe917;',
		'icon-stocks-o': '&#xe918;',
		'icon-connect-to-o': '&#xe916;',
		'icon-beta': '&#xe902;',
		'icon-paperclip': '&#xe915;',
		'icon-cloud-safe-o': '&#xe914;',
		'icon-edit-pencil': '&#xe913;',
		'icon-locked': '&#xe912;',
		'icon-ring-o': '&#xe90e;',
		'icon-trash-can-o': '&#xe90f;',
		'icon-rotate': '&#xe910;',
		'icon-check': '&#xe911;',
		'icon-password-lock-o': '&#xe906;',
		'icon-email-o': '&#xe907;',
		'icon-moneytree-pro': '&#xe908;',
		'icon-moneytree-plus': '&#xe90c;',
		'icon-moneytree-free': '&#xe90d;',
		'icon-pro-plan-o': '&#xe909;',
		'icon-plus-plan-o': '&#xe90a;',
		'icon-free-plan-o': '&#xe90b;',
		'icon-empty-transactions-o': '&#xe900;',
		'icon-empty-notifications-o': '&#xe901;',
		'icon-find-expenses-o': '&#xe903;',
		'icon-plus-thinner': '&#xe905;',
		'icon-search-o': '&#xe904;',
		'icon-corporate-o': '&#xe6d9;',
		'icon-digital-money-o': '&#xe6da;',
		'icon-stored_value-o': '&#xe6da;',
		'icon-point-o': '&#xe6db;',
		'icon-bank-o': '&#xe6dc;',
		'icon-manual-o': '&#xe6dd;',
		'icon-credit-card-o': '&#xe6de;',
		'icon-credit_card-o': '&#xe6de;',
		'icon-maintenance-circle-o': '&#xe6df;',
		'icon-low-balance-o': '&#xe6e0;',
		'icon-credit-card-payment-due-o': '&#xe6e1;',
		'icon-cc-payment-due-o': '&#xe6e1;',
		'icon-large-deposit-o': '&#xe6e2;',
		'icon-large-expense-o': '&#xe6e3;',
		'icon-notification-o': '&#xe6e4;',
		'icon-point-expiration-o': '&#xe6e5;',
		'icon-expiring-points-o': '&#xe6e5;',
		'icon-salary-received-o': '&#xe6e6;',
		'icon-salary-o': '&#xe6e6;',
		'icon-thin-cog': '&#xe6d8;',
		'icon-check-mark-circle': '&#xe6d6;',
		'icon-plus': '&#xe6d7;',
		'icon-account-icon': '&#xe6d3;',
		'icon-arrow-right': '&#xe6cf;',
		'icon-link-out-square-o': '&#xe6ce;',
		'icon-minus-circle': '&#xe6c2;',
		'icon-plus-circle': '&#xe6c3;',
		'icon-plus-circle-o': '&#xe6c4;',
		'icon-minus-circle-o': '&#xe6c5;',
		'icon-arrow': '&#xe6c0;',
		'icon-error-triangle-o': '&#xe6c1;',
		'icon-cross': '&#xe6bc;',
		'icon-mt-logo': '&#xe600;',
		'icon-mt-logo-no-leaf': '&#xe601;',
		'icon-up-arrow': '&#xe602;',
		'icon-left-arrow': '&#xe603;',
		'icon-down-arrow': '&#xe604;',
		'icon-right-arrow': '&#xe605;',
		'icon-moneytree': '&#xe60b;',
		'icon-moneytree-tm': '&#xe6bd;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
