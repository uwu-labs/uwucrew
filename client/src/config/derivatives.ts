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
	}
];

export default derivatives;
