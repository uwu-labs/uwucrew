/*
 * ----- README -----
 * Thanks for considering adding to the derivatives page!!
 * To add to the page you can edit the JSON file below.
 * The `image` attribute is the only required one!
 * But you can also add a link to the `artist` (for example Twitter Account)
 * A link to the derivatives `post` on Twitter
 * The `id` of the uwucrew NFT that it is a derivative of
 * Please add new entries to the top of the JSON file.
 * Which will result in it being displayed at the top of the page
 */

export interface DerivativeType {
	image: string;
	artistName?: string;
	artistLink?: string;
	post?: string;
	id?: number;
}

const derivatives: DerivativeType[] = [
	{
		image: 'https://pbs.twimg.com/media/FFiqAqQaQAEjHor?format=jpg&name=large',
		post: 'https://twitter.com/tue_art/status/1466109145120067588',
		artistName: 'TUE ART',
		artistLink: 'https://twitter.com/tue_art'
	},
	{
		image: 'https://pbs.twimg.com/media/FFfG-OnVEAM467o?format=jpg&name=large',
		id: 2342,
		post: 'https://twitter.com/benangbaja/status/1465858984343007235',
		artistName: 'Benangbaja',
		artistLink: 'https://twitter.com/benangbaja'
	},
	{
		image: 'https://pbs.twimg.com/media/FFyMkKnWUAAh-WT?format=jpg&name=large',
		post: 'https://twitter.com/TeamPureAquatic/status/1467202135381192711',
		artistName: 'BMT',
		artistLink: 'https://twitter.com/TeamPureAquatic'
	},
	{
		image: 'https://pbs.twimg.com/media/FFwebKGUcAEKtJh?format=jpg&name=medium',
		post: 'https://twitter.com/enabeleno/status/1467081038891749380',
		artistName: 'ENAthing',
		artistLink: 'https://twitter.com/enabeleno'
	},
	{
		image: 'https://pbs.twimg.com/media/FFYirg8X0AIjgT8?format=png&name=large',
		post: 'https://twitter.com/Feireina/status/1465397456028504067',
		artistName: 'Fei',
		artistLink: 'https://twitter.com/Feireina'
	},
	{
		image: 'https://pbs.twimg.com/media/FFsgIFqWQAgj2uM?format=jpg&name=large',
		id: 3209,
		post: 'https://twitter.com/sashakimono/status/1466802063241883657',
		artistName: 'Sasha Kim',
		artistLink: 'https://twitter.com/sashakimono'
	},
	{
		image: 'https://pbs.twimg.com/media/FFpwiYBVgAEq5X7?format=jpg&name=large',
		id: 6795,
		post: 'https://twitter.com/tsukota888/status/1466608367770935296',
		artistName: 'ぴなつこた',
		artistLink: 'https://twitter.com/tsukota888'
	},
	{
		image: 'https://pbs.twimg.com/media/FFpWExzXMAYf0k6?format=jpg&name=large',
		post: 'https://twitter.com/Odincase_eth/status/1466579610326343680',
		artistName: 'odincase',
		artistLink: 'https://twitter.com/Odincase_eth'
	},
	{
		image: 'https://pbs.twimg.com/media/FFlSLHFaMAEV4CE?format=jpg&name=large',
		post: 'https://twitter.com/tue_art/status/1466294330105098246',
		artistName: 'TUE ART',
		artistLink: 'https://twitter.com/tue_art'
	},
	{
		image: 'https://pbs.twimg.com/media/FFmlUEwagAEP0jw?format=jpg&name=large',
		post: 'https://twitter.com/tue_art/status/1466385169623908353',
		artistName: 'TUE ART',
		artistLink: 'https://twitter.com/tue_art'
	},
	{
		image: 'https://pbs.twimg.com/media/FFeO8gOVkAYpQC2?format=jpg&name=large',
		id: 7122,
		post: 'https://twitter.com/__Zetsurin/status/1465797551513239559',
		artistName: 'Zetsurin',
		artistLink: 'https://twitter.com/__Zetsurin'
	},
	{
		image: 'https://pbs.twimg.com/media/FFd59UuXsAUehK7?format=png&name=large',
		post: 'https://twitter.com/robek_world/status/1465774404630163463',
		artistName: 'rwx',
		artistLink: 'https://twitter.com/robek_world'
	},
	{
		image: 'https://pbs.twimg.com/media/FFdOfEiWYAIvzOs?format=jpg&name=large',
		id: 6334,
		post: 'https://twitter.com/garridspen/status/1465726914828685312',
		artistName: 'GARRID',
		artistLink: 'https://twitter.com/garridspen'
	},
	{
		image: 'https://pbs.twimg.com/media/FFdAFKxUUBICnwn?format=jpg&name=large',
		id: 6644,
		post: 'https://twitter.com/Penguil_Art/status/1465711739069091847',
		artistName: 'Penguil',
		artistLink: 'https://twitter.com/Penguil_Art'
	},
	{
		image: 'https://pbs.twimg.com/media/FFc7tLgaIAALABE?format=jpg&name=large',
		post: 'https://twitter.com/tue_art/status/1465706316786110472',
		artistName: 'TUE ART',
		artistLink: 'https://twitter.com/tue_art'
	},
	{
		image: 'https://pbs.twimg.com/media/FFcTE0lVIAMvrie?format=jpg&name=large',
		post: 'https://twitter.com/VmSiri/status/1465661186738126848',
		artistName: 'M.SIRIg',
		artistLink: 'https://twitter.com/VmSiri'
	},
	{
		image: 'https://pbs.twimg.com/media/FFa41PpaQAQJi5p?format=jpg&name=large',
		id: 4189,
		post: 'https://twitter.com/ssm_a_u/status/1465561958569037824',
		artistName: 'Sashimi',
		artistLink: 'https://twitter.com/ssm_a_u'
	},
	{
		image: 'https://pbs.twimg.com/media/FFb97c7agAEivD_?format=jpg&name=large',
		post: 'https://twitter.com/tsukota888/status/1465639603977605120',
		artistName: 'ぴなつこた',
		artistLink: 'https://twitter.com/tsukota888'
	},
	{
		image: 'https://pbs.twimg.com/media/FFYWCtAVQAM8E12?format=jpg&name=large',
		post: 'https://twitter.com/Hercqlit/status/1465382976494059523',
		artistName: 'Hercq',
		artistLink: 'https://twitter.com/Hercqlit'
	},
	{
		image: 'https://pbs.twimg.com/media/FFZ33u5WUAYOBKt?format=jpg&name=large',
		post: 'https://twitter.com/peritrago/status/1465490550891683843',
		artistName: 'Peritrago',
		artistLink: 'https://twitter.com/peritrago'
	},
	{
		image: 'https://pbs.twimg.com/media/FFZ49abXIAkP_6x?format=jpg&name=large',
		post: 'https://twitter.com/boozie_nft/status/1465491730615123974',
		artistName: 'Boo',
		artistLink: 'https://twitter.com/boozie_nft'
	},
	{
		image: 'https://pbs.twimg.com/media/FFZa32tXEAQq_JX?format=jpg&name=large',
		post: 'https://twitter.com/nopperaboo2/status/1465460013653282823',
		artistName: 'Kami',
		artistLink: 'https://twitter.com/nopperaboo2'
	},
	{
		image: 'https://pbs.twimg.com/media/FFZKBwCX0AEBc5G?format=jpg&name=large',
		post: 'https://twitter.com/morellostorment/status/1465440396448784385',
		artistName: 'Yu-dachi',
		artistLink: 'https://twitter.com/thx_r308'
	},
	{
		image: 'https://pbs.twimg.com/media/FFu4CgtVkAEX2F0?format=jpg&name=large',
		id: 4646,
		post: 'https://twitter.com/Huzhi152/status/1466968877397467139',
		artistName: 'StickyGum',
		artistLink: 'https://twitter.com/Huzhi152'
	},
	{
		image: 'https://pbs.twimg.com/media/FFYBjnRWQAIegZP?format=jpg&name=large',
		id: 643,
		post: 'https://twitter.com/Cerine_030/status/1465360444403724289',
		artistName: 'Cerine',
		artistLink: 'https://twitter.com/Cerine_030'
	},
	{
		image: 'https://pbs.twimg.com/media/FFXpy12WUAI_RlD?format=jpg&name=large',
		post: 'https://twitter.com/takeshi_tenma/status/1465334358898880517',
		artistName: 'Takeshi Tenma',
		artistLink: 'https://twitter.com/takeshi_tenma'
	},
	{
		image: 'https://i.imgur.com/nF30iYe.png',
		id: 8763,
		post: 'https://twitter.com/Sarana_SiraX/status/1465319339045781508',
		artistName: 'Sarana',
		artistLink: 'https://twitter.com/Sarana_SiraX'
	},
	{
		image: 'https://pbs.twimg.com/media/FFXXjbCVkAIFxm2?format=jpg&name=large',
		id: 2329,
		post: 'https://twitter.com/wakamepiza/status/1465317206883901443',
		artistName: 'Wakamepiza',
		artistLink: 'https://twitter.com/wakamepiza'
	},
	{
		image: 'https://pbs.twimg.com/media/FFSuGCAVgAAtQzF?format=jpg&name=large',
		id: 6807,
		post: 'https://twitter.com/lightenbee/status/1464987220138348545',
		artistName: 'Lighten Bee',
		artistLink: 'https://twitter.com/lightenbee'
	},
	{
		image: 'https://pbs.twimg.com/media/FFS8oX_aQAAOh1E?format=jpg&name=large',
		id: 1231,
		post: 'https://twitter.com/0TL_/status/1465003997287178243',
		artistName: 'どげざちゃん',
		artistLink: 'https://twitter.com/0TL_'
	},
	{
		image: 'https://pbs.twimg.com/media/FFI4MBVVEAMxIJz?format=jpg&name=large',
		id: 131,
		post: 'https://twitter.com/pawwaoart/status/1464294614030901256',
		artistName: 'Pawwao',
		artistLink: 'https://twitter.com/pawwaoart'
	},
	{
		image: 'https://pbs.twimg.com/media/FFF1NnZWYAEX3eh?format=jpg&name=large',
		post: 'https://twitter.com/takeshi_tenma/status/1464080234014199822',
		artistName: 'Takeshi Tenma',
		artistLink: 'https://twitter.com/takeshi_tenma'
	},
	{
		image: 'https://pbs.twimg.com/media/FF04T1EakAIEPbV?format=jpg&name=large',
		id: 3976,
		post: 'https://twitter.com/Lamenthyst/status/1467391944431181826',
		artistName: 'Lamenthyst',
		artistLink: 'https://twitter.com/Lamenthyst'
	},
	{
		image: 'https://pbs.twimg.com/media/FFy9KyIXEAwyjDn?format=jpg&name=large',
		id: 7197,
		post: 'https://twitter.com/garridspen/status/1467255860401422337',
		artistName: 'GARRID',
		artistLink: 'https://twitter.com/garridspen'
	}
];

export default derivatives;
