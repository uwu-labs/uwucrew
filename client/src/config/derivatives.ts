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
		id: 5013,
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
		image: 'https://pbs.twimg.com/media/FFyLUaLUcAUSsbc?format=jpg&name=large',
		id: 9110,
		post: 'https://twitter.com/Nitthidannn/status/1467200767891173377?s=20',
		artistName: 'Nitnit',
		artistLink: 'https://twitter.com/Nitthidannn'
	},
	{
		image: 'https://pbs.twimg.com/media/FFwebKGUcAEKtJh?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/enabeleno/status/1467081038891749380',
		artistName: 'ENAthing',
		artistLink: 'https://twitter.com/enabeleno'
	},
	{
		image: 'https://pbs.twimg.com/media/FFYirg8X0AIjgT8?format=png&name=large',
		id: 4658,
		post: 'https://twitter.com/Feireina/status/1465397456028504067',
		artistName: 'Feireina',
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
		artistName: 'ã´ãªã¤ã“ãŸ',
		artistLink: 'https://twitter.com/tsukota888'
	},
	{
		image: 'https://pbs.twimg.com/media/FFpWExzXMAYf0k6?format=jpg&name=large',
		id: 1539,
		post: 'https://twitter.com/Odincase_eth/status/1466579610326343680',
		artistName: 'odincase',
		artistLink: 'https://twitter.com/Odincase_eth'
	},
	{
		image: 'https://pbs.twimg.com/media/FFlSLHFaMAEV4CE?format=jpg&name=large',
		id: 27,
		post: 'https://twitter.com/tue_art/status/1466294330105098246',
		artistName: 'TUE ART',
		artistLink: 'https://twitter.com/tue_art'
	},
	{
		image: 'https://pbs.twimg.com/media/FFmlUEwagAEP0jw?format=jpg&name=large',
		id: 3976,
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
		id: 2393,
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
		id: 6386,
		post: 'https://twitter.com/tue_art/status/1465706316786110472',
		artistName: 'TUE ART',
		artistLink: 'https://twitter.com/tue_art'
	},
	{
		image: 'https://pbs.twimg.com/media/FFcTE0lVIAMvrie?format=jpg&name=large',
		id: 5013,
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
		id: 3209,
		post: 'https://twitter.com/tsukota888/status/1465639603977605120',
		artistName: 'ぴなつこた',
		artistLink: 'https://twitter.com/tsukota888'
	},
	{
		image: 'https://pbs.twimg.com/media/FFYWCtAVQAM8E12?format=jpg&name=large',
		id: 766,
		post: 'https://twitter.com/Hercqlit/status/1465382976494059523',
		artistName: 'Hercq',
		artistLink: 'https://twitter.com/Hercqlit'
	},
	{
		image: 'https://pbs.twimg.com/media/FFZ33u5WUAYOBKt?format=jpg&name=large',
		id: 9298,
		post: 'https://twitter.com/peritrago/status/1465490550891683843',
		artistName: 'Peritrago',
		artistLink: 'https://twitter.com/peritrago'
	},
	{
		image: 'https://pbs.twimg.com/media/FFZ49abXIAkP_6x?format=jpg&name=large',
		id: 8393,
		post: 'https://twitter.com/boozie_nft/status/1465491730615123974',
		artistName: 'Boo',
		artistLink: 'https://twitter.com/boozie_nft'
	},
	{
		image: 'https://pbs.twimg.com/media/FFZa32tXEAQq_JX?format=jpg&name=large',
		id: 3726,
		post: 'https://twitter.com/nopperaboo2/status/1465460013653282823',
		artistName: 'Kami',
		artistLink: 'https://twitter.com/nopperaboo2'
	},
	{
		image: 'https://pbs.twimg.com/media/FFZKBwCX0AEBc5G?format=jpg&name=large',
		id: 3209,
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
		id: 4550,
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
		artistName: 'ã©ã’ã–ã¡ã‚ƒã‚“',
		artistLink: 'https://twitter.com/0TL_'
	},
	{
		image: 'https://pbs.twimg.com/media/FFI4MBVVEAMxIJz?format=jpg&name=large',
		id: 131 & 3177,
		post: 'https://twitter.com/pawwaoart/status/1464294614030901256',
		artistName: 'Pawwao',
		artistLink: 'https://twitter.com/pawwaoart'
	},
	{
		image: 'https://pbs.twimg.com/media/FFF1NnZWYAEX3eh?format=jpg&name=large',
		id: 4542,
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
	},
	{
		image: 'https://pbs.twimg.com/media/E_H43hsX0AkSomX?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/opijpg/status/1437203480507207683?s=20 ',
		artistName: 'opi ',
		artistLink: 'https://twitter.com/opijpg '
	},
	{
		image: 'https://pbs.twimg.com/media/E_RysJfXsAEYdu8?format=jpg&name=large',
		id: 3209,
		post: 'https://twitter.com/morellostorment/status/1437900876287520768?s=20 ',
		artistName: 'TéGo',
		artistLink: 'https://twitter.com/TeGoArt '
	},
	{
		image: 'https://pbs.twimg.com/media/E_RH7J_UcAQw135?format=jpg&name=large',
		id: 4186,
		post: 'https://twitter.com/fungibleartist/status/1437853367154331652?s=20 ',
		artistName: 'Laur',
		artistLink: 'https://twitter.com/fungibleartist '
	},
	{
		image: 'https://pbs.twimg.com/media/FAQPFJyVUAIrYrC?format=jpg&name=large',
		id: 9294,
		post: 'https://twitter.com/xpori/status/1442294736354615299?s=20 ',
		artistName: 'xpori',
		artistLink: 'https://twitter.com/xpori'
	},
	{
		image: 'https://pbs.twimg.com/media/FAA-ngPUcA0kcpM?format=jpg&name=large',
		id: 974,
		post: 'https://twitter.com/ShepherdsDoge/status/1441221009718210560?s=20',
		artistName: 'Space*Cowboy',
		artistLink: 'https://twitter.com/ShepherdsDoge'
	},
	{
		image: 'https://pbs.twimg.com/media/FAJT1QqVUAs4vHI?format=jpg&name=large',
		id: 3978,
		post: 'https://twitter.com/theonly_manghoe/status/1441807722622558218?s=20',
		artistName: 'theonly_manghoe',
		artistLink: 'https://twitter.com/theonly_manghoe'
	},
	{
		image: 'https://pbs.twimg.com/media/FATF_DLVkAQmn9a?format=jpg&name=large',
		id: 8548,
		post: 'https://twitter.com/fahfahsnft/status/1442495474779316229?s=20',
		artistName: 'fahfahs',
		artistLink: 'https://twitter.com/fahfahsnft'
	},
	{
		image: 'https://pbs.twimg.com/media/FAMnlf0VIAAvvD0?format=jpg&name=large',
		id: 9052,
		post: 'https://twitter.com/sads18trop/status/1442040720550871044?s=20',
		artistName: 'Sads',
		artistLink: 'https://twitter.com/sads18trop'
	},
	{
		image: 'https://pbs.twimg.com/media/FAT3wh7UcAElUE7?format=jpg&name=large',
		id: 5030,
		post: 'https://twitter.com/P1u3mm/status/1442550332215623681?s=20',
		artistName: 'Plu3m',
		artistLink: 'https://twitter.com/P1u3mm'
	},
	{
		image: 'https://pbs.twimg.com/media/FAQViUyVQAEChD9?format=jpg&name=large',
		id: 5008,
		post: 'https://twitter.com/sornjaa/status/1442301474172588034?s=20',
		artistName: 'Sorn',
		artistLink: 'https://twitter.com/sornjaa'
	},
	{
		image: 'https://pbs.twimg.com/media/FASrojgVEAE0790?format=jpg&name=large',
		id: 6921,
		post: 'https://twitter.com/Floridian/status/1442466499785072642?s=20',
		artistName: 'Floridian',
		artistLink: 'https://twitter.com/Floridian'
	},
	{
		image: 'https://pbs.twimg.com/media/FAQXiUpWYAINnEh?format=jpg&name=large',
		id: 6613,
		post: 'https://twitter.com/sweetbread_eth/status/1442304095012990976?s=20',
		artistName: 'Sweetbread',
		artistLink: 'https://twitter.com/sweetbread_eth'
	},
	{
		image: 'https://pbs.twimg.com/media/FALcIgNXsAA9Vz3?format=jpg&name=large',
		id: 9083,
		post: 'https://twitter.com/Vixpora/status/1441957932913016832?s=20',
		artistName: 'Vixpora',
		artistLink: 'https://twitter.com/Vixpora'
	},
	{
		image: 'https://pbs.twimg.com/media/FAT1-ViVkAAYw6D?format=jpg&name=large',
		id: 2306,
		post: 'https://twitter.com/RanperuXD/status/1442549059818967040?s=20',
		artistName: 'Ranperu',
		artistLink: 'https://twitter.com/RanperuXD'
	},
	{
		image: 'https://pbs.twimg.com/media/FADx0AwUYAQryre?format=jpg&name=large',
		id: 4467,
		post: 'https://twitter.com/DrunkenNovice/status/1441438770906103814?s=20',
		artistName: 'Rickshaw',
		artistLink: 'https://twitter.com/DrunkenNovice'
	},
	{
		image: 'https://pbs.twimg.com/media/FANwPL7XsAA57_W?format=jpg&name=large',
		id: 2676,
		post: 'https://twitter.com/theCoveNFT/status/1442120819510022145?s=20',
		artistName: 'Teddyfrosh',
		artistLink: 'https://twitter.com/teddyfrosh'
	},
	{
		image: 'https://pbs.twimg.com/media/E__PGPcUUAE4anw?format=jpg&name=large',
		id: 5047,
		post: 'https://twitter.com/DontAtMe0001/status/1441101183179911171?s=20',
		artistName: 'DontAtMe#0001',
		artistLink: 'https://twitter.com/DontAtMe0001'
	},
	{
		image: 'https://pbs.twimg.com/media/FAHBzBpVIAkb8pz?format=jpg&name=large',
		id: 2720,
		post: 'https://twitter.com/traw2211/status/1441646442926379009?s=20',
		artistName: 'T RAW22',
		artistLink: 'https://twitter.com/traw2211'
	},
	{
		image: 'https://pbs.twimg.com/media/FAOsNV9UcAkIBok?format=jpg&name=large',
		id: 320,
		post: 'https://twitter.com/Lusan_666/status/1442185892836233222?s=20',
		artistName: 'Lusan666',
		artistLink: 'https://twitter.com/Lusan_666'
	},
	{
		image: 'https://pbs.twimg.com/media/E_-H_G2VgAc67dq?format=jpg&name=large',
		id: 5492,
		post: 'https://twitter.com/yunie_chill/status/1441020167295619078?s=20',
		artistName: 'yunie chill',
		artistLink: 'https://twitter.com/yunie_chill'
	},
	{
		image: 'https://pbs.twimg.com/media/FAO6SYdUYAYwdPl?format=jpg&name=large',
		id: 4871,
		post: 'https://twitter.com/colinkhaw/status/1442205332474720265?s=20',
		artistName: 'Colin Khaw',
		artistLink: 'https://twitter.com/colinkhaw'
	},
	{
		image: 'https://pbs.twimg.com/media/FADv7UdUYAIFuaT?format=jpg&name=large',
		id: 5047,
		post: 'https://twitter.com/DontAtMe0001/status/1441415686496997379?s=20',
		artistName: 'DontAtMe0001',
		artistLink: 'https://twitter.com/DontAtMe0001'
	},
	{
		image: 'https://pbs.twimg.com/media/E_9azWKXoAANEO4?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/0xKiwi_/status/1440970246542831616?s=20',
		artistName: 'Dektalk',
		artistLink: 'https://twitter.com/Dektalk'
	},
	{
		image: 'https://pbs.twimg.com/media/E_69cJvVgAgMrXo?format=jpg&name=large',
		id: 6750,
		post: 'https://twitter.com/AyayaHagen/status/1440802821218045959?s=20',
		artistName: 'TéGo',
		artistLink: 'https://twitter.com/TeGoArt'
	},
	{
		image: 'https://pbs.twimg.com/media/FBmLDO3VcAYv3CH?format=jpg&name=large',
		id: 6829,
		post: 'https://twitter.com/alfraea_crypt/status/1448341694382895109?s=20',
		artistName: 'alfraea',
		artistLink: 'https://twitter.com/alfraea_crypt'
	},
	{
		image: 'https://pbs.twimg.com/media/FBlm5M5UUAYPWhO?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/alfraea_crypt/status/1448303686103359506?s=20',
		artistName: 'alfraea',
		artistLink: 'https://twitter.com/alfraea_crypt'
	},
	{
		image: 'https://pbs.twimg.com/media/FBnidPnXEAAfcCh?format=jpg&name=large',
		id: 643,
		post: 'https://twitter.com/Cerine_030/status/1448437749783138304?s=20',
		artistName: 'Cerine',
		artistLink: 'https://twitter.com/Cerine_030'
	},
	{
		image: 'https://pbs.twimg.com/media/FBzfn2vVIAc9SKi?format=jpg&name=large',
		id: 9052, // and 8042
		post: 'https://twitter.com/sads18trop/status/1449279066389958662?s=20',
		artistName: 'Sads',
		artistLink: 'https://twitter.com/sads18trop'
	},
	{
		image: 'https://pbs.twimg.com/media/FAP-whkUUAcMq5B?format=jpg&name=large',
		id: 7400,
		post: 'https://twitter.com/seedpill/status/1442276685659848708?s=20',
		artistName: 'Seedpill',
		artistLink: 'https://twitter.com/seedpill'
	},
	{
		image: 'https://pbs.twimg.com/media/FAHao9pUcAM181Z?format=png&name=large',
		id: 582,
		post: 'https://twitter.com/crypto_muscle_/status/1441674046408577029?s=20',
		artistName: 'Crypto Muscle',
		artistLink: 'https://twitter.com/crypto_muscle_'
	},
	{
		image: 'https://pbs.twimg.com/media/E_8wCzTUUAEaeEl?format=jpg&name=large',
		id: 3460,
		post: 'https://twitter.com/Poptigi_/status/1440924449797148683?s=20',
		artistName: 'Poptigi',
		artistLink: 'https://twitter.com/Poptigi_'
	},
	{
		image: 'https://pbs.twimg.com/media/FAFN0hNWYAIvAd0?format=jpg&name=large',
		id: 5827,
		post: 'https://twitter.com/AyayaHagen/status/1441519933930672131?s=20',
		artistName: 'Skirdna',
		artistLink: 'https://twitter.com/andrikshmji'
	},
	{
		image: 'https://pbs.twimg.com/media/FC44blyVcAETp2k?format=jpg&name=large',
		id: 1726,
		post: 'https://twitter.com/ZINERYL/status/1454162934414798853?s=20',
		artistName: 'ZINE',
		artistLink: 'https://twitter.com/ZINERYL'
	},
	{
		image: 'https://pbs.twimg.com/media/FDepsbkUUAkqPJf?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/sawawse/status/1456820773696389130?s=20',
		artistName: 'SAWA',
		artistLink: 'https://twitter.com/sawawse'
	},
	{
		image: 'https://pbs.twimg.com/media/FDfAQx3UcAArQPL?format=jpg&name=large',
		id: 4879,
		post: 'https://twitter.com/ligaratus_/status/1456844748124082177?s=20',
		artistName: 'Notienatsu',
		artistLink: 'https://twitter.com/notienatsu'
	},
	{
		image: 'https://pbs.twimg.com/media/FEGGn9CUYAAsWbA?format=jpg&name=large',
		id: 8548,
		post: 'https://twitter.com/fahfahsnft/status/1459595780801503234?s=20',
		artistName: 'FAHFAHS',
		artistLink: 'https://twitter.com/fahfahsnft'
	},
	{
		image: 'https://pbs.twimg.com/media/FEIDbrAVcAISdSU?format=jpg&name=large',
		id: 5927,
		post: 'https://twitter.com/sawawse/status/1459733334779576321?s=20',
		artistName: 'SAWA',
		artistLink: 'https://twitter.com/sawawse'
	},
	{
		image: 'https://pbs.twimg.com/media/FEL-4k3XIAAxMRD?format=jpg&name=large',
		id: 4646,
		post: 'https://twitter.com/BlancNFT/status/1460010002324893700?s=20',
		artistName: 'Jules Blanc',
		artistLink: 'https://twitter.com/BlancNFT'
	},
	{
		image: 'https://pbs.twimg.com/media/FEcWUroWQAQn1Uq?format=jpg&name=large',
		id: 3209,
		post: 'https://twitter.com/garridspen/status/1461161906480291848?s=20',
		artistName: 'Garrid',
		artistLink: 'https://twitter.com/garridspen'
	},
	{
		image: 'https://pbs.twimg.com/media/FEazTfWXoAARFMl?format=jpg&name=large',
		id: 6372,
		post: 'https://twitter.com/Delaroche0/status/1461052279948288000?s=20',
		artistName: 'Opi',
		artistLink: 'https://twitter.com/opijpg'
	},
	{
		image: 'https://pbs.twimg.com/media/FEwWfG4UcAQOuLL?format=jpg&name=large',
		id: 3317,
		post: 'https://twitter.com/0xcompbow/status/1462571577669656577?s=20',
		artistName: 'Brad Garneau',
		artistLink: 'https://www.instagram.com/bgarneauart/'
	},
	{
		image: 'https://pbs.twimg.com/media/FExFFWNacAA9tAJ?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/sukizweetsm/status/1462623065242619904?s=20',
		artistName: 'SukiZweetSM',
		artistLink: 'https://twitter.com/sukizweetsm'
	},
	{
		image: 'https://pbs.twimg.com/media/FExWc3QUUAc7h1I?format=jpg&name=large',
		id: 3976,
		post: 'https://twitter.com/ligaratus_/status/1462642056275259392?s=20',
		artistName: 'Mile お仕事募集中',
		artistLink: 'https://twitter.com/o8q'
	},
	{
		image: 'https://pbs.twimg.com/media/FExhKC-WYAELegd?format=jpg&name=large',
		id: 2520,
		post: 'https://twitter.com/uwucrewnft/status/1462655387597950977?s=20',
		artistName: 'SoftMelon',
		artistLink: 'https://twitter.com/softmelon_nft'
	},
	{
		image: 'https://pbs.twimg.com/media/FE1-p8yVEAEI2mr?format=jpg&name=large',
		id: 5462,
		post: 'https://twitter.com/sawawse/status/1462964716725096449?s=20',
		artistName: 'SAWA',
		artistLink: 'https://twitter.com/sawawse'
	},
	{
		image: 'https://pbs.twimg.com/media/FE_Fp9DaMAANmf7?format=jpg&name=large',
		id: 441,
		post: 'https://twitter.com/GHARLIERA1/status/1463606783650394113?s=20',
		artistName: 'GHARLIERA',
		artistLink: 'https://twitter.com/GHARLIERA1'
	},
	{
		image: 'https://pbs.twimg.com/media/FFDbSdHXIAk0W1O?format=jpg&name=large',
		id: 1574,
		post: 'https://twitter.com/garridspen/status/1463912310355996678',
		artistName: 'Garrid',
		artistLink: 'https://twitter.com/garridspen'
	},
	{
		image: 'https://pbs.twimg.com/media/FFSgbSIWQAQWANU?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/garridspen/status/1464972428640149504?s=20',
		artistName: 'Garrid',
		artistLink: 'https://twitter.com/garridspen'
	},
	{
		image: 'https://pbs.twimg.com/media/FFXXjbCVkAIFxm2?format=jpg&name=large',
		id: 2329,
		post: 'https://twitter.com/wakamepiza/status/1465317206883901443?s=20',
		artistName: 'wakamepiza',
		artistLink: 'https://twitter.com/wakamepiza'
	},
	{
		image: 'https://pbs.twimg.com/media/FFXbcS8VUAQ9xCt?format=jpg&name=large',
		id: 8763,
		post: 'https://twitter.com/Sarana_SiraX/status/1465319339045781508?s=20',
		artistName: 'Sarana',
		artistLink: 'https://twitter.com/Sarana_SiraX'
	},
	{
		image: 'https://pbs.twimg.com/media/FFXpy12WUAI_RlD?format=jpg&name=large',
		id: 4550,
		post: 'https://twitter.com/takeshi_tenma/status/1465334358898880517?s=20',
		artistName: 'Takeshi Tenma',
		artistLink: 'https://twitter.com/takeshi_tenma'
	},
	{
		image: 'https://pbs.twimg.com/media/FFZKBwCX0AEBc5G?format=jpg&name=large',
		id: 3209,
		post: 'https://twitter.com/morellostorment/status/1465440396448784385?s=20',
		artistName: 'Yu-dachi',
		artistLink: 'https://twitter.com/thx_r308'
	},
	{
		image: 'https://pbs.twimg.com/media/FFsphzbVgAQeAaI?format=png&name=large',
		id: 9664,
		post: 'https://twitter.com/fungibleartist/status/1466811888331726850?s=20',
		artistName: 'Laur',
		artistLink: 'https://twitter.com/fungibleartist'
	},
	{
		image: 'https://pbs.twimg.com/media/FFu4CgtVkAEX2F0?format=jpg&name=large',
		id: 4646,
		post: 'https://twitter.com/Huzhi152/status/1466968877397467139?s=20',
		artistName: 'MoldyRabbit',
		artistLink: 'https://twitter.com/Huzhi152'
	},
	{
		image: 'https://pbs.twimg.com/media/FFyLUaNVIAEpgXH?format=jpg&name=large',
		id: 1198,
		post: 'https://twitter.com/Nitthidannn/status/1467200767891173377?s=20',
		artistName: 'Nitnit',
		artistLink: 'https://twitter.com/Nitthidannn'
	},
	{
		image: 'https://pbs.twimg.com/media/FF3dloKVkAAtvzt?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/proado1/status/1467573514353868800?s=20',
		artistName: 'Proado',
		artistLink: 'https://twitter.com/proado1'
	},
	{
		image: 'https://pbs.twimg.com/media/FF3h6FWUYAA_d4x?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/VisharieNFT/status/1467579580605091840?s=20',
		artistName: 'Visharie',
		artistLink: 'https://twitter.com/VisharieNFT'
	},
	{
		image: 'https://pbs.twimg.com/media/FF71gYXaUAA08cv?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/ssm_a_u/status/1467880470470066176?s=20',
		artistName: 'Sashimi',
		artistLink: 'https://twitter.com/ssm_a_u'
	},
	{
		image: 'https://pbs.twimg.com/media/FF997v-XEAITFRe?format=jpg&name=large',
		id: 3976,
		post: 'https://twitter.com/garridspen/status/1468030932552720388?s=20',
		artistName: 'Garrid',
		artistLink: 'https://twitter.com/garridspen'
	},
	{
		image: 'https://pbs.twimg.com/media/FGAVI43VIAks3Uv?format=jpg&name=large',
		id: 7317,
		post: 'https://twitter.com/gweniart_/status/1468197645193674754?s=20',
		artistName: 'GWENI',
		artistLink: 'https://twitter.com/gweniart_'
	},
	{
		image: 'https://pbs.twimg.com/media/FFkwqQdWUAYZ0gp?format=jpg&name=large',
		id: 5528,
		post: 'https://twitter.com/peritrago/status/1466257031912906757?s=20',
		artistName: 'Peritrago',
		artistLink: 'https://twitter.com/peritrago'
	},
	{
		image: 'https://pbs.twimg.com/media/FGEnaMxUYAEeIs2?format=jpg&name=large',
		id: 9559,
		post: 'https://twitter.com/sukizweetsm/status/1468500396000026631?s=20',
		artistName: 'SukiZweetSM',
		artistLink: 'https://twitter.com/sukizweetsm'
	},
	{
		image: 'https://pbs.twimg.com/media/FGNQ-B-WQAUPoEv?format=jpg&name=large',
		id: 643,
		post: 'https://twitter.com/Cerine_030/status/1469106932363452417?s=20',
		artistName: 'Cerine',
		artistLink: 'https://twitter.com/Cerine_030'
	},
	{
		image: 'https://pbs.twimg.com/media/FGXLgxJUcAM0uUX?format=jpg&name=large',
		id: 1147,
		post: 'https://twitter.com/asmhimenft/status/1469804627558240256?s=20',
		artistName: 'ASAMI姫',
		artistLink: 'https://twitter.com/asmhimenft'
	},
	{
		image: 'https://pbs.twimg.com/media/FGbmKlbWUAY_D7c?format=jpg&name=large',
		id: 5013,
		post: 'https://twitter.com/AyayaHagen/status/1470115543218806787?s=20',
		artistName: 'TUE ART',
		artistLink: 'https://twitter.com/tue_art'
	},
	{
		image: 'https://pbs.twimg.com/media/FGhNQIAXwAgLhw9?format=jpg&name=large',
		id: 4640,
		post: 'https://twitter.com/NateSqn/status/1470510223236505615?s=20',
		artistName: 'Nate',
		artistLink: 'https://twitter.com/NateSqn'
	},
	{
		image: 'https://pbs.twimg.com/media/FGmsvv7WQAQ7hAq?format=jpg&name=large',
		id: 9298, // and 4646,
		post: 'https://twitter.com/BlancNFT/status/1470897159822364684?s=20',
		artistName: 'Jules Blanc',
		artistLink: 'https://twitter.com/BlancNFT'
	},
	{
		image: 'https://pbs.twimg.com/media/FGqFPrpUUAA9yzJ?format=jpg&name=large',
		id: 4692,
		post: 'https://twitter.com/hyeonjeong76/status/1471134737255534593?s=20',
		artistName: 'hyunhyun',
		artistLink: 'https://twitter.com/hyeonjeong76'
	},
	{
		image: 'https://pbs.twimg.com/media/FGqr6vbXsAI60Ch?format=jpg&name=large',
		id: 3209,
		post: 'https://twitter.com/morellostorment/status/1471177516178198532?s=20',
		artistName: 'Mile お仕事募集中',
		artistLink: 'https://twitter.com/o8q'
	},
	{
		image: 'https://pbs.twimg.com/media/FGoWZXxUUAYTWMN?format=jpg&name=large',
		id: 5013,
		post: 'https://twitter.com/__Zetsurin/status/1471012860230656006?s=20',
		artistName: 'Zetsurin',
		artistLink: 'https://twitter.com/__Zetsurin'
	},
	{
		image: 'https://pbs.twimg.com/media/FGvtwHuVQAMe5_j?format=jpg&name=large',
		id: 3976,
		post: 'https://twitter.com/pawwaoart/status/1471531120328003585?s=20',
		artistName: 'pawwao',
		artistLink: 'https://twitter.com/pawwaoart'
	},
	{
		image: 'https://pbs.twimg.com/media/FG2oZRaXIAABiqh?format=jpg&name=large',
		id: 7884,
		post: 'https://twitter.com/takeshi_tenma/status/1472019716722073600?s=20',
		artistName: 'Takeshi Tenma',
		artistLink: 'https://twitter.com/takeshi_tenma'
	},
	{
		image: 'https://pbs.twimg.com/media/FG6XDnAaIAAdLnR?format=jpg&name=large',
		id: 4542,
		post: 'https://twitter.com/6maker_nft/status/1472280220871045122?s=20',
		artistName: '6maker',
		artistLink: 'https://twitter.com/6maker_nft'
	},
	{
		image: 'https://pbs.twimg.com/media/FG6XQG0aAAAvOZI?format=jpg&name=large',
		id: 8614,
		post: 'https://twitter.com/6maker_nft/status/1472280435585863680?s=20',
		artistName: '6maker',
		artistLink: 'https://twitter.com/6maker_nft'
	},
	{
		image: 'https://pbs.twimg.com/media/FG5v49WVUAMOKpk?format=png&name=large',
		id: 3976,
		post: 'https://twitter.com/shinjuroukai/status/1472237302432763904?s=20',
		artistName: 'Shinjurou',
		artistLink: 'https://twitter.com/shinjuroukai'
	},
	{
		image: 'https://pbs.twimg.com/media/FG74DHWVcAcgNVK?format=jpg&name=small',
		id: 8614,
		post: 'https://twitter.com/sawawse/status/1472387107675013124?s=20',
		artistName: 'SAWA',
		artistLink: 'https://twitter.com/sawawse',
	},
{
		image: 'https://pbs.twimg.com/media/FHALvXwVkAUuz6A?format=jpg&name=small',
		id: 6929,
		post: 'https://twitter.com/0xcompbow/status/1472689988793892865?s=20',
		artistName: 'SAWA',
		artistLink: 'https://twitter.com/sawawse',
	},
{
		image: 'https://pbs.twimg.com/media/FHCpUJUXIAIFNjY?format=png&name=small',
		id: 4009,
		post: 'https://twitter.com/uwucrewnft/status/1472938520910364674?s=20',
		artistName: 'ta2nb',
		artistLink: 'https://twitter.com/ta2nb_mkiii',
	},
{
		image: 'https://twitter.com/i/status/1472717678964060171',
		id: 4542,
		post: 'https://twitter.com/peritrago/status/1472717678964060171?s=20',
		artistName: 'Peritrago',
		artistLink: 'https://twitter.com/peritrago',
	},
{
		image: 'https://pbs.twimg.com/media/FHEyzeiVkAABH36?format=jpg&name=small',
		id: 4542,
		post: 'https://twitter.com/__Zetsurin/status/1473017642877259777?s=20',
		artistName: 'Zetsurin',
		artistLink: 'https://twitter.com/__Zetsurin',
	},
{
		image: 'https://pbs.twimg.com/media/FHeUX1yaAAAP9Tt?format=jpg&name=900x900',
		id: 4777,
		post: 'https://twitter.com/6maker_/status/1474810545769709570',
		artistName: '6maker',
		artistLink: 'https://twitter.com/6maker_',
	},
{
		image: 'https://pbs.twimg.com/media/FHe9jDuaIAExZQv?format=jpg&name=medium',
		id: 7650 & 3756,
		post: 'https://twitter.com/Lamenthyst/status/1474858233894666240',
		artistName: 'Lamenthyst',
		artistLink: 'https://twitter.com/Lamenthyst',
	},
{
		image: 'https://pbs.twimg.com/media/FHgQ47TXMAgrRol?format=jpg&name=small',
		id: 3209,
		post: 'https://twitter.com/xiran_art/status/1474950572818288645',
		artistName: 'xiran',
		artistLink: 'https://twitter.com/xiran_art',
	},
{
		image: 'https://pbs.twimg.com/media/FHgkF6fWYAMw22U?format=jpg&name=360x360',
		id: 3209,
		post: 'https://twitter.com/wind_flour/status/1474968564801187842',
		artistName: 'wind flour',
		artistLink: 'https://twitter.com/wind_flour',
	},
{
		image: 'https://pbs.twimg.com/media/FHgvAX1VUAMp15R?format=jpg&name=900x900',
		id: 8149,
		post: 'https://twitter.com/RHINTH/status/1474981760593055750',
		artistName: 'RH',
		artistLink: 'https://twitter.com/RHINTH',
	},
{
		image: 'https://pbs.twimg.com/media/FHgm2STUYAAKqkQ?format=jpg&name=900x900',
		id: 9669,
		post: 'https://twitter.com/w____poop/status/1474971603855314946',
		artistName: 'w___',
		artistLink: 'https://twitter.com/w____poop',
	},
{
		image: 'https://pbs.twimg.com/media/FHeCw65aAAEfUnp?format=jpg&name=360x360',
		id: 5462,
		post: 'https://twitter.com/0TL_/status/1474792215612637184',
		artistName: 'どげざちゃん/Dogeza-chan',
		artistLink: 'https://twitter.com/0TL_',
	},
{
		image: 'https://pbs.twimg.com/media/FHjoR8bXsAQ_4gQ?format=jpg&name=4096x4096',
		id: 8614,
		post: 'https://twitter.com/opijpg/status/1475184430406848518',
		artistName: 'opi',
		artistLink: 'https://twitter.com/opijpg',
	},
{
		image: 'https://pbs.twimg.com/media/FHjPc5eVUAAr2N6?format=jpg&name=900x900',
		id: 4542,
		post: 'https://twitter.com/Lemon_Tart01/status/1475157870907777026',
		artistName: 'MonStreet',
		artistLink: 'https://twitter.com/Lemon_Tart01',
	},
{
		image: 'https://pbs.twimg.com/media/FHnzHQTVgAEzRDe?format=jpg&name=small',
		id: 4542,
		post: 'https://twitter.com/gweniart_/status/1475481934897684480',
		artistName: 'GWENI',
		artistLink: 'https://twitter.com/gweniart_',
	},
{
		image: 'https://pbs.twimg.com/media/FHowKZzUYAErrkc?format=jpg&name=small',
		id: 6119,
		post: 'https://twitter.com/enabeleno/status/1475545389633736704',
		artistName: 'Enachan',
		artistLink: 'https://twitter.com/enabeleno',
	},
{
		image: 'https://pbs.twimg.com/media/FHmE9lnWUAES3-T?format=jpg&name=900x900',
		id: 5085,
		post: 'https://twitter.com/boozie_nft/status/1475356549954650112',
		artistName: 'boozie nft',
		artistLink: 'https://twitter.com/boozie_nft',
	},
{
		image: 'https://pbs.twimg.com/media/FHqN-WyUUAYBLdz?format=jpg&name=small',
		id: 4542,
		post: 'https://twitter.com/benangbaja/status/1475647937623597061',
		artistName: 'Benangbaja',
		artistLink: 'https://twitter.com/benangbaja',
	},
{
		image: 'https://pbs.twimg.com/media/FHsa3GgWUAMN99P?format=jpg&name=small',
		id: 1473,
		post: 'https://twitter.com/helena_mizu/status/1475802922525077505',
		artistName: 'Helena Mizu',
		artistLink: 'https://twitter.com/helena_mizu',
	},
{
		image: 'https://pbs.twimg.com/media/FHsIFZKXEAEpNJp?format=jpg&name=small',
		id: 1326,
		post: 'https://twitter.com/tylerghost_52/status/1475782197445636100',
		artistName: 'Tyler Ghost',
		artistLink: 'https://twitter.com/tylerghost_52',
	},
{
		image: 'https://twitter.com/ChinpongR/status/1475868154295320577',
		id: 4655,
		post: 'https://twitter.com/ChinpongR/status/1475868154295320577',
		artistName: 'Sykz',
		artistLink: 'https://twitter.com/ChinpongR',
	},
{
		image: 'https://pbs.twimg.com/media/FHvBByDUYAA1z6Y?format=jpg&name=360x360',
		id: 1970,
		post: 'https://twitter.com/Gerygrietss/status/1475987196553269249',
		artistName: 'Gerygrietss',
		artistLink: 'https://twitter.com/Gerygrietss',
	},
{
		image: 'https://twitter.com/ChinpongR/status/1476077881642024961',
		id: 5721,
		post: 'https://twitter.com/ChinpongR/status/1476077881642024961',
		artistName: 'Sykz',
		artistLink: 'https://twitter.com/ChinpongR',
	},
{
		image: 'https://twitter.com/ChinpongR/status/1476289104803364864',
		id: 6586,
		post: 'https://twitter.com/ChinpongR/status/1476289104803364864',
		artistName: 'Sykz',
		artistLink: 'https://twitter.com/ChinpongR',
	},
{
		image: 'https://pbs.twimg.com/media/FH4DzYAWYAQVnvj?format=jpg&name=900x900',
		id: 5827,
		post: 'https://twitter.com/garridspen/status/1476622991568027650',
		artistName: 'GARRID',
		artistLink: 'https://twitter.com/garridspen',
	},
{
		image: 'https://pbs.twimg.com/media/FH37-36UcAEp7AK?format=jpg&name=small',
		id: 1660,
		post: 'https://twitter.com/cryingqiqi/status/1476616637381939226',
		artistName: '琪琪',
		artistLink: 'https://twitter.com/cryingqiqi',
	},
{
		image: 'https://pbs.twimg.com/media/FH3EI-CaIAADEwO?format=jpg&name=small',
		id: 1326,
		post: 'https://twitter.com/super_omocheese/status/1476555149950976000',
		artistName: 'おもちーず',
		artistLink: 'https://twitter.com/super_omocheese',
	},
{
		image: 'https://twitter.com/ChinpongR/status/1476534069588488192',
		id: 8614,
		post: 'https://twitter.com/ChinpongR/status/1476534069588488192',
		artistName: 'Sykz',
		artistLink: 'https://twitter.com/ChinpongR',
	},
{
		image: 'https://pbs.twimg.com/media/FH3MYrNacAIQHjj?format=jpg&name=900x900',
		id: 4306,
		post: 'https://twitter.com/6maker_/status/1476560982281682944',
		artistName: '6maker',
		artistLink: 'https://twitter.com/6maker_',
	},
{
		image: 'https://twitter.com/ChinpongR/status/1476692157561933827',
		id: 4661,
		post: 'https://twitter.com/ChinpongR/status/1476692157561933827',
		artistName: 'Sykz',
		artistLink: 'https://twitter.com/ChinpongR',
	},
{
		image: 'https://pbs.twimg.com/media/FH6lAReVkAEIn6F?format=jpg&name=small',
		id: 6062,
		post: 'https://twitter.com/nadhsan_NFT/status/1476799154651156481',
		artistName: 'Nad',
		artistLink: 'https://twitter.com/nadhsan_NFT',
	},
{
		image: 'https://twitter.com/ChinpongR/status/1476875531412901888',
		id: 2393,
		post: 'https://twitter.com/ChinpongR/status/1476875531412901888',
		artistName: 'Sykz',
		artistLink: 'https://twitter.com/ChinpongR',
	},
{
		image: 'https://pbs.twimg.com/media/FH70qkrVcAAspeK?format=jpg&name=small',
		id: 2458,
		post: 'https://twitter.com/ivanov_aart/status/1476886749540458498',
		artistName: 'Ivanov',
		artistLink: 'https://twitter.com/ivanov_aart',
	},
{
		image: 'https://twitter.com/ChinpongR/status/1477373683740020737',
		id: 5457,
		post: 'https://twitter.com/ChinpongR/status/1477373683740020737',
		artistName: 'Sykz',
		artistLink: 'https://twitter.com/ChinpongR',
	},
{
		image: 'https://pbs.twimg.com/media/FIIA_A6XoAETT7f?format=jpg&name=small',
		id: 6869,
		post: 'https://twitter.com/donlokathefingr/status/1477744791496634369',
		artistName: '6maker',
		artistLink: 'https://twitter.com/6maker_',
	},
{
		image: 'https://twitter.com/tylerghost_52/status/1477755763481268226/photo/1',
		id: 1261,
		post: 'https://twitter.com/tylerghost_52/status/1477755763481268226',
		artistName: 'Tyler Ghost',
		artistLink: 'https://twitter.com/tylerghost_52',
	},
{
		image: 'https://pbs.twimg.com/media/FILVWcJVkAAH0-3?format=jpg&name=small',
		id: 7415,
		post: 'https://twitter.com/nadhsan_NFT/status/1477979994512973830',
		artistName: 'Nad',
		artistLink: 'https://twitter.com/nadhsan_NFT',
	},
{
		image: 'https://twitter.com/ChinpongR/status/1478036837021061123',
		id: 5827,
		post: 'https://twitter.com/ChinpongR/status/1478036837021061123',
		artistName: 'Sykz',
		artistLink: 'https://twitter.com/ChinpongR',
	},
{
		image: 'https://pbs.twimg.com/media/FINZ66AUcAEorZy?format=jpg&name=small',
		id: 6709,
		post: 'https://twitter.com/izam_BKB/status/1478123991034306560',
		artistName: 'izambkb',
		artistLink: 'https://twitter.com/izam_BKB',
	},
{
		image: 'https://pbs.twimg.com/media/FIPVHF5aMAENJNM?format=jpg&name=900x900',
		id: 3993,
		post: 'https://twitter.com/6maker_nft/status/1478259426637533186',
		artistName: '6maker',
		artistLink: 'https://twitter.com/6maker_nft',
	},
{
		image: 'https://pbs.twimg.com/media/FIRIQ2bXIAM2D9C?format=jpg&name=small',
		id: 3993,
		post: 'https://twitter.com/tylerghost_52/status/1478386038263398401',
		artistName: 'Tyler Ghost',
		artistLink: 'https://twitter.com/tylerghost_52',
	},
{
		image: 'https://pbs.twimg.com/media/FISCY5SVQAAoRtn?format=jpg&name=900x900',
		id: 3993,
		post: 'https://twitter.com/etahoshi/status/1478451510811889665',
		artistName: 'ETA',
		artistLink: 'https://twitter.com/etahoshi',
	},
{
		image: 'https://twitter.com/furagu2525/status/1478395432300871681',
		id: 3993,
		post: 'https://twitter.com/furagu2525/status/1478395432300871681',
		artistName: 'ゲシュタルト崩壊フラグ',
		artistLink: 'https://twitter.com/furagu2525',
	},
{
		image: 'https://pbs.twimg.com/media/FIUUVkJaUAQVtap?format=jpg&name=small',
		id: 4726,
		post: 'https://twitter.com/akamikko/status/1478610418235228160',
		artistName: 'あかみっこ',
		artistLink: 'https://twitter.com/akamikko',
	},
{
		image: 'https://pbs.twimg.com/media/FIYykE3WYAEJqak?format=jpg&name=900x900',
		id: 1660,
		post: 'https://twitter.com/takeshi_tenma/status/1478925125227528195',
		artistName: 'Takeshi Tenma',
		artistLink: 'https://twitter.com/takeshi_tenma',
	},
{
		image: 'https://pbs.twimg.com/media/FIY2dLaaQAMQqev?format=jpg&name=900x900',
		id: 4726,
		post: 'https://twitter.com/suama1019/status/1478929410049060866',
		artistName: 'すあまこ(suamako)',
		artistLink: 'https://twitter.com/suama1019',
	},
{
		image: 'https://pbs.twimg.com/media/FIc2T7-akAA1CGS?format=jpg&name=900x900',
		id: 4726,
		post: 'https://twitter.com/tani_fancy/status/1479210722148384768',
		artistName: 'たに/tani',
		artistLink: 'https://twitter.com/tani_fancy',
	},
{
		image: 'https://pbs.twimg.com/media/FIfdNBGaUAESjfF?format=jpg&name=900x900',
		id: 4726,
		post: 'https://twitter.com/hiragikirara/status/1479394222960967681',
		artistName: '柊きらら',
		artistLink: 'https://twitter.com/hiragikirara',
	},
{
		image: 'https://pbs.twimg.com/media/FHZppIpXoAQBe6Q?format=jpg&name=900x900',
		id: 3209,
		post: 'https://twitter.com/morellostorment/status/1474485067959394315',
		artistName: 'samjoko//',
		artistLink: 'https://twitter.com/samjoko__',
	},
{
		image: 'https://twitter.com/PepeCloverNFT/status/1459696889981329408?s=20',
		id: 7296,
		post: 'https://twitter.com/PepeCloverNFT/status/1459696889981329408?s=20',
		artistName: 'FourLeafClover',
		artistLink: 'https://twitter.com/PepeCloverNFT',
	},
{
		image: 'https://pbs.twimg.com/media/FHy5SgxXMAQmh2n?format=png&name=small',
		id: 9323,
		post: 'https://twitter.com/OmarIbisa/status/1476259134551040006',
		artistName: 'SAWA',
		artistLink: 'https://twitter.com/sawawse',
	},
	{
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1476077881642024961",
    post: "https://twitter.com/ChinpongR/status/1476077881642024961",
    id: 5721
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1476289104803364864",
    post: "https://twitter.com/ChinpongR/status/1476289104803364864",
    id: 6586
  },
  {
    artistName: "Garrid",
    artistLink: "https://twitter.com/garridspen",
    image: "https://pbs.twimg.com/media/FH4DzYAWYAQVnvj?format=jpg&name=900x900",
    post: "https://twitter.com/garridspen/status/1476622991568027650",
    id: 5827
  },
  {
    artistName: "Cryingqiqi",
    artistLink: "https://twitter.com/cryingqiqi",
    image: "https://pbs.twimg.com/media/FH37-36UcAEp7AK?format=jpg&name=small",
    post: "https://twitter.com/cryingqiqi/status/1476616637381939226",
    id: 1660
  },
  {
    artistName: "super_omocheese",
    artistLink: "https://twitter.com/super_omocheese",
    image: "https://pbs.twimg.com/media/FH3EI-CaIAADEwO?format=jpg&name=small",
    post: "https://twitter.com/super_omocheese/status/1476555149950976000",
    id: 1326
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1476534069588488192",
    post: "https://twitter.com/ChinpongR/status/1476534069588488192",
    id: 8614
  },
  {
    artistName: "6maker",
    artistLink: "https://twitter.com/6maker_",
    image: "https://pbs.twimg.com/media/FH3MYrNacAIQHjj?format=jpg&name=900x900",
    post: "https://twitter.com/6maker_/status/1476560982281682944",
    id: 4306
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/i/status/1476692157561933827",
    image: "https://twitter.com/i/status/1476692157561933827",
    post: "https://twitter.com/ChinpongR/status/1476692157561933827",
    id: 4661
  },
  {
    artistName: "Nadhsan",
    artistLink: "https://twitter.com/nadhsan_NFT",
    image: "https://pbs.twimg.com/media/FH6lAReVkAEIn6F?format=jpg&name=small",
    post: "https://twitter.com/nadhsan_NFT/status/1476799154651156481",
    id: 6062
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1476875531412901888",
    post: "https://twitter.com/ChinpongR/status/1476875531412901888",
    id: 2393
  },
  {
    artistName: "Ivanov",
    artistLink: "https://twitter.com/ivanov_aart",
    image: "https://pbs.twimg.com/media/FH70qkrVcAAspeK?format=jpg&name=small",
    post: "https://twitter.com/ivanov_aart/status/1476886749540458498",
    id: 2458
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1477373683740020737",
    post: "https://twitter.com/ChinpongR/status/1477373683740020737",
    id: 5457
  },
  {
    artistName: "6maker",
    artistLink: "https://twitter.com/6maker_",
    image: "https://pbs.twimg.com/media/FIIA_A6XoAETT7f?format=jpg&name=small",
    post: "https://twitter.com/donlokathefingr/status/1477744791496634369",
    id: 6869
  },
  {
    artistName: "Tyler Ghost",
    artistLink: "https://twitter.com/tylerghost_52",
    image: "https://pbs.twimg.com/media/FIILCBHX0AAV8Lh?format=jpg&name=small",
    post: "https://twitter.com/tylerghost_52/status/1477755763481268226",
    id: 1261
  },
  {
    artistName: "Nadhsan",
    artistLink: "https://twitter.com/nadhsan_NFT",
    image: "https://pbs.twimg.com/media/FILVWcJVkAAH0-3?format=jpg&name=small",
    post: "https://twitter.com/nadhsan_NFT/status/1477979994512973830",
    id: 7415
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1478036837021061123",
    post: "https://twitter.com/ChinpongR/status/1478036837021061123",
    id: 5827
  },
  {
    artistName: "Izam_bkb",
    artistLink: "https://twitter.com/izam_BKB",
    image: "https://pbs.twimg.com/media/FINZ66AUcAEorZy?format=jpg&name=small",
    post: "https://twitter.com/izam_BKB/status/1478123991034306560",
    id: 6709
  },
  {
    artistName: "6maker",
    artistLink: "https://twitter.com/6maker_nft",
    image: "https://pbs.twimg.com/media/FIPVHF5aMAENJNM?format=jpg&name=900x900",
    post: "https://twitter.com/6maker_nft/status/1478259426637533186",
    id: 3993
  },
  {
    artistName: "Tyler Ghost",
    artistLink: "https://twitter.com/tylerghost_52",
    image: "https://pbs.twimg.com/media/FIRIQ2bXIAM2D9C?format=jpg&name=small",
    post: "https://twitter.com/tylerghost_52/status/1478386038263398401",
    id: 3993
  },
  {
    artistName: "Etahoshi",
    artistLink: "https://twitter.com/etahoshi",
    image: "https://pbs.twimg.com/media/FISCY5SVQAAoRtn?format=jpg&name=900x900",
    post: "https://twitter.com/etahoshi/status/1478451510811889665",
    id: 3993
  },
  {
    artistName: "gesyutaruto",
    artistLink: "https://twitter.com/furagu2525",
    image: "https://twitter.com/i/status/1478395432300871681",
    post: "https://twitter.com/furagu2525/status/1478395432300871681",
    id: 3993
  },
  {
    artistName: "Akamikko",
    artistLink: "https://twitter.com/akamikko",
    image: "https://pbs.twimg.com/media/FIUUVkJaUAQVtap?format=jpg&name=small",
    post: "https://twitter.com/akamikko/status/1478610418235228160",
    id: 4726
  },
  {
    artistName: "Takeshi Tenma",
    artistLink: "https://twitter.com/takeshi_tenma",
    image: "https://pbs.twimg.com/media/FIYykE3WYAEJqak?format=jpg&name=900x900",
    post: "https://twitter.com/takeshi_tenma/status/1478925125227528195",
    id: 1660
  },
  {
    artistName: "Suamako",
    artistLink: "https://twitter.com/suama1019",
    image: "https://pbs.twimg.com/media/FIY2dLaaQAMQqev?format=jpg&name=900x900",
    post: "https://twitter.com/suama1019/status/1478929410049060866",
    id: 4726
  },
  {
    artistName: "Tani",
    artistLink: "https://twitter.com/tani_fancy",
    image: "https://pbs.twimg.com/media/FIc2T7-akAA1CGS?format=jpg&name=900x900",
    post: "https://twitter.com/tani_fancy/status/1479210722148384768",
    id: 4726
  },
  {
    artistName: "Hiragikirara",
    artistLink: "https://twitter.com/hiragikirara",
    image: "https://pbs.twimg.com/media/FIfdNBGaUAESjfF?format=jpg&name=900x900",
    post: "https://twitter.com/hiragikirara/status/1479394222960967681",
    id: 4726
  },
  {
    artistName: "Samjoko",
    artistLink: "https://twitter.com/samjoko__",
    image: "https://pbs.twimg.com/media/FHZppIpXoAQBe6Q?format=jpg&name=900x900",
    post: "https://twitter.com/morellostorment/status/1474485067959394315",
    id: 3209
  },
  {
    artistName: "6maker",
    artistLink: "https://twitter.com/6maker_",
    image: "https://pbs.twimg.com/media/FHeUX1yaAAAP9Tt?format=jpg&name=900x900",
    post: "https://twitter.com/6maker_/status/1474810545769709570",
    id: 4777
  },
  {
    artistName: "Lamenthyst",
    artistLink: "https://twitter.com/Lamenthyst",
    image: "https://pbs.twimg.com/media/FHe9jDuaIAExZQv?format=jpg&name=medium",
    post: "https://twitter.com/Lamenthyst/status/1474858233894666240",
    id: 7650, //"7650 3756"
  },
  {
    artistName: "Xiran",
    artistLink: "https://twitter.com/xiran_art",
    image: "https://pbs.twimg.com/media/FHgQ47TXMAgrRol?format=jpg&name=small",
    post: "https://twitter.com/xiran_art/status/1474950572818288645",
    id: 3209
  },
  {
    artistName: "Wind_flour",
    artistLink: "https://twitter.com/wind_flour",
    image: "https://pbs.twimg.com/media/FHgkF6fWYAMw22U?format=jpg&name=360x360",
    post: "https://twitter.com/wind_flour/status/1474968564801187842",
    id: 3209
  },
  {
    artistName: "RHINTH",
    artistLink: "https://twitter.com/RHINTH",
    image: "https://pbs.twimg.com/media/FHgvAX1VUAMp15R?format=jpg&name=900x900",
    post: "https://twitter.com/RHINTH/status/1474981760593055750",
    id: 8149
  },
  {
    artistName: "w____poop",
    artistLink: "https://twitter.com/w____poop",
    image: "https://pbs.twimg.com/media/FHgm2STUYAAKqkQ?format=jpg&name=900x900",
    post: "https://twitter.com/w____poop/status/1474971603855314946",
    id: 9669
  },
  {
    artistName: "Dogeza",
    artistLink: "https://twitter.com/0TL_",
    image: "https://pbs.twimg.com/media/FHeCw65aAAEfUnp?format=jpg&name=4096x4096",
    post: "https://twitter.com/0TL_/status/1474792215612637184",
    id: 5462
  },
  {
    artistName: "Opi",
    artistLink: "https://twitter.com/opijpg",
    image: "https://pbs.twimg.com/media/FHjoR8bXsAQ_4gQ?format=jpg&name=4096x4096",
    post: "https://twitter.com/opijpg/status/1475184430406848518",
    id: 8614
  },
  {
    artistName: "Lemon_Tart01",
    artistLink: "https://twitter.com/Lemon_Tart01",
    image: "https://pbs.twimg.com/media/FHjPc5eVUAAr2N6?format=jpg&name=4096x4096",
    post: "https://twitter.com/Lemon_Tart01/status/1475157870907777026",
    id: 4542
  },
  {
    artistName: "Gweni",
    artistLink: "https://twitter.com/gweniart_",
    image: "https://pbs.twimg.com/media/FHnzHQTVgAEzRDe?format=jpg&name=4096x4096",
    post: "https://twitter.com/gweniart_/status/1475481934897684480",
    id: 4542
  },
  {
    artistName: "Ena",
    artistLink: "https://twitter.com/enabeleno",
    image: "https://pbs.twimg.com/media/FHowKZzUYAErrkc?format=jpg&name=large",
    post: "https://twitter.com/enabeleno/status/1475545389633736704",
    id: 6119
  },
  {
    artistName: "Boozie",
    artistLink: "https://twitter.com/boozie_nft",
    image: "https://pbs.twimg.com/media/FHmE9lnWUAES3-T?format=jpg&name=large",
    post: "https://twitter.com/boozie_nft/status/1475356549954650112",
    id: 5085
  },
  {
    artistName: "Benangbaja",
    artistLink: "https://twitter.com/benangbaja",
    image: "https://pbs.twimg.com/media/FHqN-WyUUAYBLdz?format=jpg&name=large",
    post: "https://twitter.com/benangbaja/status/1475647937623597061",
    id: 4542
  },
  {
    artistName: "Helena Mizu",
    artistLink: "https://twitter.com/helena_mizu",
    image: "https://pbs.twimg.com/media/FHsa3GgWUAMN99P?format=jpg&name=medium",
    post: "https://twitter.com/helena_mizu/status/1475802922525077505",
    id: 1473
  },
  {
    artistName: "Tyler Ghost",
    artistLink: "https://twitter.com/tylerghost_52",
    image: "https://pbs.twimg.com/media/FHsIFZKXEAEpNJp?format=jpg&name=large",
    post: "https://twitter.com/tylerghost_52/status/1475782197445636100",
    id: 1326
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1475868154295320577",
    post: "https://twitter.com/ChinpongR/status/1475868154295320577",
    id: 4655
  },
  {
    artistName: "Gerygrietss",
    artistLink: "https://twitter.com/Gerygrietss",
    image: "https://pbs.twimg.com/media/FHvBByDUYAA1z6Y?format=jpg&name=4096x4096",
    post: "https://twitter.com/Gerygrietss/status/1475987196553269249",
    id: 1970
  },
  {
    artistName: "Sawaheya",
    artistLink: "https://twitter.com/sawawse",
    image: "https://pbs.twimg.com/media/FIEnChUUcAAg8Mg?format=jpg&name=large",
    post: "https://twitter.com/sawawse/status/1477505081754800128",
    id: ""
  },
  {
    artistName: "Hamui",
    artistLink: "https://twitter.com/hamui_nft",
    image: "https://pbs.twimg.com/media/FIUL0gYVkAEJLee?format=png&name=360x360",
    post: "https://twitter.com/ligaratus_/status/1478602917477187587",
    id: 3976
  },
  {
    artistName: "O8q",
    artistLink: "https://twitter.com/o8q",
    image: "https://pbs.twimg.com/media/FIhFSCJWYAUq_8h?format=jpg&name=large",
    post: "https://twitter.com/0xKiwi_/status/1479508656643268609",
    id: 4542
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1479537043386814464",
    post: "https://twitter.com/ChinpongR/status/1479537043386814464",
    id: 4661
  },
  {
    artistName: "Tonakai",
    artistLink: "https://twitter.com/tonakai_art",
    image: "https://pbs.twimg.com/media/FIiG-DkXsAYGBAt?format=jpg&name=4096x4096",
    post: "https://twitter.com/mugentrader/status/1479580888333697026",
    id: 5323
  },
  {
    artistName: "DeeDraws",
    artistLink: "https://twitter.com/DeeDraws22",
    image: "https://pbs.twimg.com/media/FIkvaBjVgAItU6H?format=jpg&name=large",
    post: "https://twitter.com/DeeDraws22/status/1479766083384975364",
    id: 5013
  },
  {
    artistName: "Kanamomoka",
    artistLink: "https://twitter.com/kanamomoka5",
    image: "https://pbs.twimg.com/media/FIkrdHQaQAIJM8A?format=jpg&name=medium",
    post: "https://twitter.com/kanamomoka5/status/1479761799020888067",
    id: 4881
  },
  {
    artistName: "Shinjurou",
    artistLink: "https://twitter.com/shinjuroueth",
    image: "https://pbs.twimg.com/media/FIl9fy-VIAIewNR?format=jpg&name=large",
    post: "https://twitter.com/shinjuroueth/status/1479852243981537280",
    id: 3976
  },
  {
    artistName: "Etahoshi",
    artistLink: "https://twitter.com/etahoshi",
    image: "https://pbs.twimg.com/media/FInFqXKVEAEmC7i?format=jpg&name=4096x4096",
    post: "https://twitter.com/0xcompbow/status/1479932688085643264",
    id: 6174
  },
  {
    artistName: "Aktpapa",
    artistLink: "https://twitter.com/aktpapa",
    image: "https://pbs.twimg.com/media/FIrcgIeaUAA_bFN?format=jpg&name=large",
    post: "https://twitter.com/aktpapa/status/1480238265609625603",
    id: 4881
  },
  {
    artistName: "SoftMelon",
    artistLink: "https://twitter.com/SoftMelon_NFT",
    image: "https://pbs.twimg.com/media/FIyGachXwAAFgRF?format=jpg&name=large",
    post: "https://twitter.com/SoftMelon_NFT/status/1480706659530027008",
    id: 4542
  },
  {
    artistName: "Zetsurin",
    artistLink: "https://twitter.com/__Zetsurin",
    image: "https://pbs.twimg.com/media/FI1YmfOVQAAYg88?format=jpg&name=large",
    post: "https://twitter.com/__Zetsurin/status/1480937278666989570",
    id: 3209
  },
  {
    artistName: "Drunken Novice",
    artistLink: "https://twitter.com/nomad_rick",
    image: "https://pbs.twimg.com/media/FI0I61_XMAQK8Ze?format=jpg&name=4096x4096",
    post: "https://twitter.com/nomad_rick/status/1480850493949763585",
    id: 4467
  },
  {
    artistName: "Mae",
    artistLink: "https://twitter.com/mae_1031_",
    image: "https://twitter.com/i/status/1480875407222075394",
    post: "https://twitter.com/ligaratus_/status/1480875407222075394",
    id: 3976
  },
  {
    artistName: "Jan",
    artistLink: "https://twitter.com/JANphotoCNX",
    image: "https://pbs.twimg.com/media/FI197iDVIAUMP5z?format=jpg&name=4096x4096",
    post: "https://twitter.com/JANphotoCNX/status/1480979043109380098",
    id: 4542
  },
  {
    artistName: "Gasari",
    artistLink: "https://twitter.com/GasariFND",
    image: "https://pbs.twimg.com/media/FIyslnoaMAUYt62?format=jpg&name=4096x4096",
    post: "https://twitter.com/GasariFND/status/1480748348659609601",
    id: 4542
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1481359649949589516",
    post: "https://twitter.com/ChinpongR/status/1481359649949589516",
    id: 3993, //"3993 4726 4881"
  },
  {
    artistName: "Tue",
    artistLink: "https://twitter.com/tue_art",
    image: "https://pbs.twimg.com/media/FI_b99BaIAMz03P?format=jpg&name=4096x4096",
    post: "https://twitter.com/tue_art/status/1481644672967909388",
    id: 4542
  },
  {
    artistName: "Kimikoo",
    artistLink: "https://twitter.com/Kimikoo_art",
    image: "https://pbs.twimg.com/media/FJAtyL-XMAYeGKO?format=jpg&name=4096x4096",
    post: "https://twitter.com/Kimikoo_art/status/1481734703673757702",
    id: 3213
  },
  {
    artistName: "Zetsurin",
    artistLink: "https://twitter.com/__Zetsurin",
    image: "https://pbs.twimg.com/media/FJB1hqfakAAjgMV?format=jpg&name=large",
    post: "https://twitter.com/__Zetsurin/status/1481813504126775297",
    id: 5013
  },
  {
    artistName: "Zhenzhu",
    artistLink: "https://twitter.com/zhenzhu_zoldyck",
    image: "https://twitter.com/i/status/1481786721591500800",
    post: "https://twitter.com/zhenzhu_zoldyck/status/1481786721591500800",
    id: 3993, //3993 4726 4881"
  },
  {
    artistName: "Nadhsan",
    artistLink: "https://twitter.com/nadhsan_NFT",
    image: "https://pbs.twimg.com/media/FJC0ydeaUAAsVWW?format=jpg&name=large",
    post: "https://twitter.com/nadhsan_NFT/status/1481883060748845056",
    id: 5013
  },
  {
    artistName: "Flrwnx",
    artistLink: "https://twitter.com/FlrwnxNft",
    image: "https://twitter.com/i/status/1481982857119932416",
    post: "https://twitter.com/FlrwnxNft/status/1481982857119932416",
    id: 3993
  },
  {
    artistName: "Tomi",
    artistLink: "https://twitter.com/10_mi_n",
    image: "https://pbs.twimg.com/media/FIyhvZzaMAEwev7?format=jpg&name=medium",
    post: "https://twitter.com/10_mi_n/status/1480736217914568704",
    id: 6235
  },
  {
    artistName: "iBooBee",
    artistLink: "https://twitter.com/_iboobee",
    image: "https://pbs.twimg.com/media/FJFhvc5aIAAWkfg?format=jpg&name=4096x4096",
    post: "https://twitter.com/_iboobee/status/1482073275304136705",
    id: 3993
  },
  {
    artistName: "Alice",
    artistLink: "https://twitter.com/gkm_alice",
    image: "https://twitter.com/i/status/1482265464323850241",
    post: "https://twitter.com/gkm_alice/status/1482265464323850241",
    id: 4542
  },
  {
    artistName: "Yongster",
    artistLink: "https://twitter.com/yonqallery",
    image: "https://pbs.twimg.com/media/FI_2d7iakAA0i0Q?format=jpg&name=large",
    post: "https://twitter.com/yonqallery/status/1481673808327372807",
    id: 4726
  },
  {
    artistName: "Amana",
    artistLink: "https://twitter.com/amana_nft",
    image: "https://pbs.twimg.com/media/FJCXCv-agAMQXlI?format=jpg&name=large",
    post: "https://twitter.com/amana_nft/status/1481850355940204544",
    id: 4881
  },
  {
    artistName: "Blablabest",
    artistLink: "https://twitter.com/blablabest9090",
    image: "https://pbs.twimg.com/media/FJI9g1XaMAUNjNI?format=jpg&name=4096x4096",
    post: "https://twitter.com/blablabest9090/status/1482314883370975233",
    id: 4726
  },
  {
    artistName: "CREAM",
    artistLink: "https://twitter.com/0planCREAM",
    image: "https://twitter.com/i/status/1482388660981219330",
    post: "https://twitter.com/0planCREAM/status/1482388660981219330",
    id: 4881
  },
  {
    artistName: "Hamui",
    artistLink: "https://twitter.com/hamui_nft",
    image: "https://pbs.twimg.com/media/FJKR1vAacAUuKXm?format=jpg&name=large",
    post: "https://twitter.com/hamui_nft/status/1482407582350594048",
    id: 3209
  },
  {
    artistName: "JenShenya",
    artistLink: "https://twitter.com/JenShenya",
    image: "https://pbs.twimg.com/media/FJKcLdhXIAQeMMM?format=jpg&name=4096x4096",
    post: "https://twitter.com/JenShenya/status/1482418952433246209",
    id: 3976
  },
  {
    artistName: "Anko",
    artistLink: "https://twitter.com/anko1oo7",
    image: "https://pbs.twimg.com/media/FJNotNsaQAsVTAa?format=jpg&name=large",
    post: "https://twitter.com/anko1oo7/status/1482645156994379776",
    id: 4881
  },
  {
    artistName: "Nat",
    artistLink: "https://twitter.com/xtwonat",
    image: "https://pbs.twimg.com/media/FJM8VI6acAIzCW-?format=jpg&name=large",
    post: "https://twitter.com/xtwonat/status/1482595043924144130",
    id: 4881
  },
  {
    artistName: "DeeDraws",
    artistLink: "https://twitter.com/DeeDraws22",
    image: "https://pbs.twimg.com/media/FJS_kPvWUAACOcq?format=jpg&name=large",
    post: "https://twitter.com/WayneK3rr/status/1483020814136004612",
    id: 1474
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1483261024900116480",
    post: "https://twitter.com/ChinpongR/status/1483261024900116480",
    id: ""
  },
  {
    artistName: "ANJU",
    artistLink: "https://twitter.com/ANJUonIine",
    image: "https://twitter.com/i/status/1483248035563925506",
    post: "https://twitter.com/ANJUonIine/status/1483248035563925506",
    id: 1520
  },
  {
    artistName: "B Son",
    artistLink: "https://twitter.com/beescozyplace",
    image: "https://pbs.twimg.com/media/FJ87J4dVcAAtT1t?format=jpg&name=4096x4096",
    post: "https://twitter.com/beescozyplace/status/1485971781944963073",
    id: 28
  },
  {
    artistName: "Kuramin",
    artistLink: "https://twitter.com/KuraminNft",
    image: "https://pbs.twimg.com/media/FJ-nE5WaIAAB4ws?format=jpg&name=large",
    post: "https://twitter.com/KuraminNft/status/1486090110760517633",
    id: 4726
  },
  {
    artistName: "Ning",
    artistLink: "https://twitter.com/NekoMeawNFT",
    image: "https://pbs.twimg.com/media/FKDbk2JakAAWYcA?format=jpg&name=large",
    post: "https://twitter.com/NekoMeawNFT/status/1486429310278062080",
    id: 4726
  },
  {
    artistName: "Mxnt",
    artistLink: "https://twitter.com/MxntStudio",
    image: "https://pbs.twimg.com/media/FKDKp_paUAEEbj0?format=jpg&name=large",
    post: "https://twitter.com/MxntStudio/status/1486410707315085313",
    id: 4881
  },
  {
    artistName: "Gumi",
    artistLink: "https://twitter.com/gumi_art",
    image: "https://pbs.twimg.com/media/FKFBUliUUAEncQD?format=jpg&name=large",
    post: "https://twitter.com/gumi_art/status/1486541711069171720",
    id: 3626
  },
  {
    artistName: "KatanaGirl",
    artistLink: "https://twitter.com/PinkKatanaGirl",
    image: "https://pbs.twimg.com/media/FKEfpwNaUAMzVc9?format=jpg&name=4096x4096",
    post: "https://twitter.com/PinkKatanaGirl/status/1486504556997783555",
    id: 3085
  },
  {
    artistName: "Gumi",
    artistLink: "https://twitter.com/gumi_art",
    image: "https://pbs.twimg.com/media/FKFxWiRVIAAvNTH?format=jpg&name=large",
    post: "https://twitter.com/gumi_art/status/1486594409047085057",
    id: 4320
  },
  {
    artistName: "Kita",
    artistLink: "https://twitter.com/Kitanoe2",
    image: "https://pbs.twimg.com/media/FKFFd2rVcAM2Ks7?format=jpg&name=4096x4096",
    post: "https://twitter.com/Kitanoe2/status/1486545743376572422",
    id: 4726
  },
  {
    artistName: "Naninna",
    artistLink: "https://twitter.com/NaninnaTH",
    image: "https://pbs.twimg.com/media/FJWsnCfVEAI5y7h?format=jpg&name=large",
    post: "https://twitter.com/NaninnaTH/status/1483281445737033729",
    id: 3993
  },
  {
    artistName: "Tifa",
    artistLink: "https://twitter.com/tiplouuf_",
    image: "https://pbs.twimg.com/media/FJZl6fQWUAkjQQr?format=jpg&name=large",
    post: "https://twitter.com/tiplouuf_/status/1483485191012237312",
    id: 4726
  },
  {
    artistName: "Cerine",
    artistLink: "https://twitter.com/Cerine_030",
    image: "https://pbs.twimg.com/media/FJa-_vWXoA0CQjm?format=jpg&name=4096x4096",
    post: "https://twitter.com/Cerine_030/status/1483583916699172865",
    id: 4881
  },
  {
    artistName: "Utayuzuki",
    artistLink: "https://twitter.com/utayuzuki",
    image: "https://pbs.twimg.com/media/FJakNCpaAAA-yp7?format=jpg&name=4096x4096",
    post: "https://twitter.com/utayuzuki/status/1483556842014130180",
    id: 3993
  },
  {
    artistName: "Coppters",
    artistLink: "https://twitter.com/coppters",
    image: "https://twitter.com/i/status/1483729572713873413",
    post: "https://twitter.com/coppters/status/1483729572713873413",
    id: 4726
  },
  {
    artistName: "Alice",
    artistLink: "https://twitter.com/gkm_alice",
    image: "https://twitter.com/i/status/1483772679119597572",
    post: "https://twitter.com/Elesoterik/status/1483772679119597572",
    id: 604
  },
  {
    artistName: "6maker",
    artistLink: "https://twitter.com/6maker_nft",
    image: "https://pbs.twimg.com/media/FJfdaqVUYAIfzTx?format=jpg&name=large",
    post: "https://twitter.com/6maker_nft/status/1483898058383380481",
    id: 4812
  },
  {
    artistName: "Sarana",
    artistLink: "https://twitter.com/Sarana_SiraX",
    image: "https://pbs.twimg.com/media/FJf0CiuagAAwEFD?format=jpg&name=4096x4096",
    post: "https://twitter.com/Sarana_SiraX/status/1483923063901425664",
    id: 3993
  },
  {
    artistName: "Take_n1i",
    artistLink: "https://twitter.com/TAKE_N1i",
    image: "https://pbs.twimg.com/media/FJimFvvakAUcVNo?format=jpg&name=medium",
    post: "https://twitter.com/TAKE_N1i/status/1484118701398175744",
    id: 3993
  },
  {
    artistName: "Kimiko",
    artistLink: "https://twitter.com/Kimikoo_art",
    image: "https://pbs.twimg.com/media/FJkmWZWX0AUA359?format=jpg&name=large",
    post: "https://twitter.com/Kimikoo_art/status/1484260107986911233",
    id: 4542
  },
  {
    artistName: "Ting",
    artistLink: "https://twitter.com/envynoneko",
    image: "https://pbs.twimg.com/media/FJkffgpaQAM1P0b?format=jpg&name=large",
    post: "https://twitter.com/envynoneko/status/1484252537201250304",
    id: 9530
  },
  {
    artistName: "Zelifornia",
    artistLink: "https://twitter.com/zelifornia",
    image: "https://pbs.twimg.com/media/FJiKZeWaUAMI-6a?format=jpg&name=medium",
    post: "https://twitter.com/zelifornia/status/1484088824137658369",
    id: 3993
  },
  {
    artistName: "DeeDraws",
    artistLink: "https://twitter.com/DeeDraws22",
    image: "https://pbs.twimg.com/media/FJoRU6taIAQxVWZ?format=jpg&name=large",
    post: "https://twitter.com/DeeDraws22/status/1484518089014190081",
    id: 18
  },
  {
    artistName: "Kangcono",
    artistLink: "https://twitter.com/_KANGCONO",
    image: "https://pbs.twimg.com/media/FJoosyiXsAAwoFR?format=jpg&name=large",
    post: "https://twitter.com/morellostorment/status/1484544249811116034",
    id: 3209
  },
  {
    artistName: "Samjoko",
    artistLink: "https://twitter.com/samjoko__",
    image: "https://pbs.twimg.com/media/FJonGhEX0AUmCHg?format=jpg&name=large",
    post: "https://twitter.com/0xEddy/status/1484542024372178952",
    id: 891
  },
  {
    artistName: "Zetsurin",
    artistLink: "https://twitter.com/__Zetsurin",
    image: "https://pbs.twimg.com/media/FJoohgtaAAYV1Ci?format=jpg&name=large",
    post: "https://twitter.com/__Zetsurin/status/1484543592274493442",
    id: 6788
  },
  {
    artistName: "6maker",
    artistLink: "https://twitter.com/6maker_nft",
    image: "https://pbs.twimg.com/media/FJpiEA7UUAAWYhF?format=jpg&name=large",
    post: "https://twitter.com/6maker_nft/status/1484606852356657153",
    id: 2999
  },
  {
    artistName: "Jules Blanc",
    artistLink: "https://twitter.com/BlancNFT",
    image: "https://pbs.twimg.com/media/FJp2WxIXwAQaor4?format=jpg&name=large",
    post: "https://twitter.com/BlancNFT/status/1484629163436912640",
    id: 4646
  },
  {
    artistName: "Zetsurin",
    artistLink: "https://twitter.com/__Zetsurin",
    image: "https://pbs.twimg.com/media/FJcdSAfaMAUrMVu?format=jpg&name=4096x4096",
    post: "https://twitter.com/__Zetsurin/status/1483687893650477056",
    id: 3976
  },
  {
    artistName: "Alice",
    artistLink: "https://twitter.com/gkm_alice",
    image: "https://twitter.com/i/status/1484673720442822656",
    post: "https://twitter.com/gkm_alice/status/1484673720442822656",
    id: 891
  },
  {
    artistName: "Mochi",
    artistLink: "https://twitter.com/MochiiDR",
    image: "https://pbs.twimg.com/media/FJvAEV-X0AgpbQV?format=jpg&name=medium",
    post: "https://twitter.com/MochiiDR/status/1484991687151824904",
    id: 5013
  },
  {
    artistName: "Proado",
    artistLink: "https://twitter.com/proado1",
    image: "https://pbs.twimg.com/media/FJuVqD1aAAExtWg?format=jpg&name=4096x4096",
    post: "https://twitter.com/proado1/status/1484946378745081856",
    id: 5013
  },
  {
    artistName: "Sykz",
    artistLink: "https://twitter.com/ChinpongR",
    image: "https://twitter.com/i/status/1485260250542645249",
    post: "https://twitter.com/ChinpongR/status/1485260250542645249",
    id: 5462
  },
  {
    artistName: "Zetsurin",
    artistLink: "https://twitter.com/__Zetsurin",
    image: "https://pbs.twimg.com/media/FJ0FqiZaIAACm1z?format=jpg&name=large",
    post: "https://twitter.com/__Zetsurin/status/1485349686584438789",
    id: 5013
  },
  {
    artistName: "Sawaheya",
    artistLink: "https://twitter.com/sawawse",
    image: "https://pbs.twimg.com/media/FJ1dkEYXsAI99Ze?format=jpg&name=4096x4096",
    post: "https://twitter.com/xouhater/status/1485449092738203648",
    id: 2466
  },
  {
    artistName: "Maze",
    artistLink: "https://twitter.com/maze_mister",
    image: "https://pbs.twimg.com/media/FJ2XxY9WYAIFf8p?format=jpg&name=4096x4096",
    post: "https://twitter.com/maze_mister/status/1485510473093156865",
    id: 4881
  },
  {
    artistName: "Takeshi Tenma",
    artistLink: "https://twitter.com/takeshi_tenma",
    image: "https://pbs.twimg.com/media/FJ1y1t_XIAU4b2c?format=jpg&name=4096x4096",
    post: "https://twitter.com/takeshi_tenma/status/1485471596387225604",
    id: 9609
  },
  {
    artistName: "Patch",
    artistLink: "https://twitter.com/Patch_NFT",
    image: "https://pbs.twimg.com/media/FJ1STd5aIAYTFPv?format=jpg&name=medium",
    post: "https://twitter.com/Patch_NFT/status/1485434148269727746",
    id: 3976
  },
  {
    artistName: "Patch",
    artistLink: "https://twitter.com/Patch_NFT",
    image: "https://pbs.twimg.com/media/FJ1SSYQaUAIp1Bb?format=jpg&name=medium",
    post: "https://twitter.com/Patch_NFT/status/1485434148269727746",
    id: 3209
  },
  {
    artistName: "Drunken Novice",
    artistLink: "https://twitter.com/nomad_rick",
    image: "https://pbs.twimg.com/media/FJ5JYo5XwAkv-If?format=jpg&name=large",
    post: "https://twitter.com/nomad_rick/status/1485705825196953607",
    id: 5013
  },
  {
    artistName: "Fobpo",
    artistLink: "https://twitter.com/Fecian2",
    image: "https://pbs.twimg.com/media/FJ7GHCTX0AESQn8?format=jpg&name=large",
    post: "https://twitter.com/HopsNFTs/status/1485842754777276418",
    id: 2724
  },
  {
    artistName: "Alice",
    artistLink: "https://twitter.com/gkm_alice",
    image: "https://twitter.com/i/status/1485925435750105088",
    post: "https://twitter.com/gkm_alice/status/1485925435750105088",
    id: 5827
  },
  {
    artistName: "Dektalk",
    artistLink: "https://twitter.com/Dektalk",
    image: "https://pbs.twimg.com/media/FJ8ec8fagAQz1LB?format=jpg&name=large",
    post: "https://twitter.com/Dektalk/status/1485939890722598912",
    id: 4726
  },
  {
    artistName: "6maker",
    artistLink: "https://twitter.com/6maker_nft",
    image: "https://pbs.twimg.com/media/FJ9CbT-UYAMLoKm?format=jpg&name=large",
    post: "https://twitter.com/6maker_nft/status/1485979442811793415",
    id: 4542
  },
  {
    artistName: "EthereumNinja",
    artistLink: "https://twitter.com/EthereumNinja",
    image: "https://pbs.twimg.com/media/FJ843BUaAAQZasa?format=png&name=small",
    post: "https://twitter.com/EthereumNinja/status/1485969241832849413",
    id: 2302
  },
  {
    artistName: "Cappie",
    artistLink: "https://twitter.com/cappie_cc",
    image: "https://pbs.twimg.com/media/FJ8rZLPaIAA6y5D?format=jpg&name=4096x4096",
    post: "https://twitter.com/cappie_cc/status/1485957216490651648",
    id: 3993
  },
  {
    artistName: "McLeod9",
    artistLink: "https://twitter.com/McLeod___9",
    image: "https://pbs.twimg.com/media/FJ9omrQWQBExaCO?format=png&name=small",
    post: "https://twitter.com/McLeod___9/status/1486023577526808576",
    id: 9438
  },
  {
    artistName: "Coppters",
    artistLink: "https://twitter.com/coppters",
    image: "https://twitter.com/i/status/1486017506188087301",
    post: "https://twitter.com/coppters/status/1486017506188087301",
    id: 9667
  },
  {
    artistName: "Kinoco",
    artistLink: "https://twitter.com/kinoco012",
    image: "https://pbs.twimg.com/media/FJ9ur2AaMAET9D5?format=jpg&name=900x900",
    post: "https://twitter.com/kinoco012/status/1486028276829401088",
    id: 4881
  },
  {
    artistName: "Aoya",
    artistLink: "https://twitter.com/AoyaNFT",
    image: "https://pbs.twimg.com/media/FKF6eVtVUAQaDzp?format=jpg&name=4096x4096",
    post: "https://twitter.com/AoyaNFT/status/1486604952927563783",
    id: 5729
  },
  {
    artistName: "Gmow",
    artistLink: "https://twitter.com/_GMOW",
    image: "https://twitter.com/i/status/1486620943397322757",
    post: "https://twitter.com/_GMOW/status/1486620943397322757",
    id: 3993
  },
  {
    artistName: "Alice",
    artistLink: "https://twitter.com/gkm_alice",
    image: "https://twitter.com/i/status/1486715443368792069",
    post: "https://twitter.com/gkm_alice/status/1486715443368792069",
    id: 4542
  },
  {
    artistName: "6maker",
    artistLink: "https://twitter.com/6maker_nft",
    image: "https://pbs.twimg.com/media/FKIm_qUVEAApZCo?format=jpg&name=large",
    post: "https://twitter.com/6maker_nft/status/1486793706174775297",
    id: 5169
  },
  {
    artistName: "Gumi",
    artistLink: "https://twitter.com/gumi_art",
    image: "https://pbs.twimg.com/media/FKI3lXcVcAM9hm9?format=jpg&name=large",
    post: "https://twitter.com/gumi_art/status/1486811946972184576",
    id: 6668
  },
  {
    artistName: "Sawaheya",
    artistLink: "https://twitter.com/sawawse",
    image: "https://pbs.twimg.com/media/FKLDeLcUYAEwzgo?format=jpg&name=large",
    post: "https://twitter.com/0x_Chef/status/1486965776451989506",
    id: 3411
  },
  {
    artistName: "Ritsuki",
    artistLink: "https://twitter.com/ritsuki_nft",
    image: "https://pbs.twimg.com/media/FKL8QezVUAgELAz?format=jpg&name=large",
    post: "https://twitter.com/ritsuki_nft/status/1487028195048054787",
    id: 4881
  },
  {
    artistName: "DeeDraws",
    artistLink: "https://twitter.com/DeeDraws22",
    image: "https://pbs.twimg.com/media/FKL04P4aAAEJPnA?format=jpg&name=large",
    post: "https://twitter.com/DeeDraws22/status/1487020130475274240",
    id: 7626
  },
  {
    artistName: "Ppraewithme",
    artistLink: "https://twitter.com/ppraewithme_nft",
    image: "https://pbs.twimg.com/media/FKM3NHrUcAI_jUd?format=jpg&name=large",
    post: "https://twitter.com/ppraewithme_nft/status/1487093686014197760",
    id: 3993
  },
  {
    artistName: "Gumi",
    artistLink: "https://twitter.com/gumi_art",
    image: "https://pbs.twimg.com/media/FKM_HFDUUAAfXWz?format=jpg&name=large",
    post: "https://twitter.com/gumi_art/status/1487101698254327813",
    id: 7168
  },
  {
    artistName: "Aoya",
    artistLink: "https://twitter.com/AoyaNFT",
    image: "https://pbs.twimg.com/media/FKPCFt-VIAU83h4?format=jpg&name=4096x4096",
    post: "https://twitter.com/AoyaNFT/status/1487246375834161153",
    id: 4726
  },
  {
    artistName: "Bee",
    artistLink: "https://twitter.com/lightenbee",
    image: "https://pbs.twimg.com/media/FKSOHVqVEAEzRZT?format=jpg&name=large",
    post: "https://twitter.com/lightenbee/status/1487470043117936640",
    id: 4726
  },
  {
    artistName: "Minirzz",
    artistLink: "https://twitter.com/minirzz_",
    image: "https://pbs.twimg.com/media/FKSIBP2aIAEC1D-?format=jpg&name=large",
    post: "https://twitter.com/minirzz_/status/1487463339785875459",
    id: 3993, // 3993 4726 4881"
  },
  {
    artistName: "Alice",
    artistLink: "https://twitter.com/gkm_alice",
    image: "https://twitter.com/i/status/1486843320319954944",
    post: "https://twitter.com/dini_xcii/status/1486843320319954944",
    id: 5084
  },
  {
    artistName: "Ta2nb",
    artistLink: "https://twitter.com/ta2nb_mkiii",
    image: "https://twitter.com/i/status/1487668558553546758",
    post: "https://twitter.com/ta2nb_mkiii/status/1487668558553546758",
    id: 3993, //"3993 4726 4881"
  },
  {
    artistName: "Win",
    artistLink: "https://twitter.com/konowin777",
    image: "https://pbs.twimg.com/media/FKXUK8gVcAI0_gh?format=jpg&name=large",
    post: "https://twitter.com/konowin777/status/1487828540787593220",
    id: 4881
  },
  {
    artistName: "Tomi",
    artistLink: "https://twitter.com/10_mi_n",
    image: "https://pbs.twimg.com/media/FKWiJzBaAAME3WZ?format=jpg&name=large",
    post: "https://twitter.com/10_mi_n/status/1487773545564622848",
    id: 4881
  },
  {
    artistName: "6maker",
    artistLink: "https://twitter.com/6maker_nft",
    image: "https://pbs.twimg.com/media/FKYg9bvaIAA30zp?format=jpg&name=4096x4096",
    post: "https://twitter.com/red_toastr/status/1487913543802691584",
    id: 6070
  },
  {
    artistName: "GooddayGirl",
    artistLink: "https://twitter.com/gooooddayg",
    image: "https://pbs.twimg.com/media/FKYnXPgaMAASTNW?format=jpg&name=4096x4096",
    post: "https://twitter.com/gooooddayg/status/1487920363564859394",
    id: 4726
  },
  {
    artistName: "Simonahues",
    artistLink: "https://twitter.com/simonahues",
    image: "https://pbs.twimg.com/media/FKZBUVEXwAUcp9Z?format=jpg&name=large",
    post: "https://twitter.com/simonahues/status/1487948952041406465",
    id: 4881
  },
  {
    artistName: "Gumi",
    artistLink: "https://twitter.com/gumi_art",
    image: "https://pbs.twimg.com/media/FKZo0vuUYAM-Xjj?format=jpg&name=large",
    post: "https://twitter.com/gumi_art/status/1487991987668013058",
    id: 3993
  },
  {
    artistName: "10Salaii",
    artistLink: "https://twitter.com/10SaLaii_NFT",
    image: "https://pbs.twimg.com/media/FKahF-aUUAMStIC?format=jpg&name=large",
    post: "https://twitter.com/10SaLaii_NFT/status/1488053860501377028",
    id: 3993
  },
  {
    artistName: "CharNim",
    artistLink: "https://twitter.com/FancyCharNim",
    image: "https://pbs.twimg.com/media/FKaEe05VEAEJ0kg?format=jpg&name=medium",
    post: "https://twitter.com/FancyCharNim/status/1488022722927947777",
    id: 4726
  },
  {
    artistName: "Nadhsan",
    artistLink: "https://twitter.com/nadhsan_NFT",
    image: "https://pbs.twimg.com/media/FKa-FwZVgAAejIT?format=jpg&name=large",
    post: "https://twitter.com/nadhsan_NFT/status/1488085736536477696",
    id: 4881
  },
  {
    artistName: "Risa",
    artistLink: "https://twitter.com/risamomochan",
    image: "https://pbs.twimg.com/media/FKcEn2yaUAEw1Em?format=jpg&name=large",
    post: "https://twitter.com/risamomochan/status/1488163290232803328",
    id: 3993
  },
  {
    artistName: "Rdy",
    artistLink: "https://twitter.com/RdyLiao",
    image: "https://pbs.twimg.com/media/FKcYHzpVgAA-LA9?format=jpg&name=large",
    post: "https://twitter.com/RdyLiao/status/1488184730717548545",
    id: 6092
  },
  {
    artistName: "NyanFT",
    artistLink: "https://twitter.com/Nyan_F_T",
    image: "https://pbs.twimg.com/media/FKcIPJzaUAE7HgX?format=jpg&name=large",
    post: "https://twitter.com/Nyan_F_T/status/1488167285449580547",
    id: 3993
  }
];

export default derivatives;
