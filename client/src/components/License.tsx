import React, { useState } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/dist/client/router';

const theCrew = [
	14, 25, 35, 389, 1461, 1850, 2504, 3209, 3489, 4174, 4542, 4636, 6153, 6785, 7643, 7953, 8006, 8022, 8028, 8047, 8614, 9295, 9641, 9668, 9669
];

const StyledLicense = styled.div`
	padding: 1rem 5rem;
	padding-top: 10rem;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--bg-02);
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));

	@media (max-width: 720px) {
		padding: 2rem;
		padding-top: 7rem;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 150em;
`;

const Header = styled.h1`
	font-weight: 700;
	color: var(--bg-02);
	line-height: 6rem;
	margin-top: 6rem;
	font-size: 7rem;

	@media (max-width: 768px) {
		font-size: 4.5rem;
		margin-top: 4rem;
		line-height: 4rem;
	}
`;

const SmallHeader = styled.h2`
	font-weight: 600;
	color: var(--text-primary);
	margin-top: 5rem;
	line-height: 3rem;
	font-size: 4rem;

	@media (max-width: 768px) {
		font-size: 3rem;
		margin-top: 4rem;
	}
`;

const SubHeader = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	margin-top: 2rem;
	font-size: 1.7rem;
	line-height: 2.3rem;

	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
		margin-top: 1.5rem;
	}
`;

const Link = styled.a`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	margin-top: 2rem;
	text-decoration: underline;
	font-size: 1.7rem;
	line-height: 2.3rem;

	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
		margin-top: 1.5rem;
	}
`;

const Uwus = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 1rem;
	margin-top: 5rem;
	margin-bottom: 5rem;
`;

const UwuContainer = styled.a`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	transform: scale(1);
	transition: 0.3s transform;
	:hover {
		transform: scale(1.05);
	}
`;

const UwuImage = styled.img`
	width: 100%;
`;

const UwuText = styled.div`
	font-weight: 500;
	font-size: 2rem;
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	margin-left: 3rem;
`;

const H3 = styled.h3`
	font-size: 2rem;
	font-weight: 10000;
	font-family: 'museo', Helvetica Neue, Helvetica, sans-serif;
`;
const Li = styled.li`
    font-weight: 500;
    color: var(--text-primary);
    max-width: 70%;
    margin-top: 1rem;
    font-size: 1.7rem;k
    line-height: 2.3rem;

    @media (max-width: 768px) {
        font-size: 1.6rem;
        line-height: 2rem;
        max-width: 100%;
        width: 100%;
        margin-top: 0.7rem ;
    }
`;

const Dropdown = styled.select`
	border: solid 2px var(--bg-03);
	background: white;
	height: 3rem;
	font-size: 1.6rem;
	font-weight: 500;
	padding: 0 0.5rem;
	cursor: pointer;
`;

const License = () => {
	const { t } = useTranslation('common');
	const router = useRouter();
	const [lang, setLang] = useState(router.locale);
	const { locales } = router;

	const onSelectChange = (e: { target: { value: string } }) => {
		const locale = e.target.value;
		setLang(locale);
		void router.push(router.asPath, router.asPath, {
			locale,
			scroll: false
		});
	};

	return (
		<StyledLicense>
			<Dropdown value={lang} onChange={(e) => onSelectChange(e)}>
				{locales &&
					locales.map((language) => (
						<option value={language}>
							{language === 'en'
								? 'EN'
								: language === 'ja'
								? 'JA'
								: language === 'zh-CN'
								? 'zh-CN'
								: language === 'zh-TW'
								? 'zh-TW'
								: null}
						</option>
					))}
			</Dropdown>
			<Content>
				<Header>{t('license.header')}</Header>
				<SubHeader>{t('license.subheader-0')}</SubHeader>
				<Link href="https://uwucrew.art/">
					<SubHeader>{t('license.subheader-1')}</SubHeader>
				</Link>
				<SmallHeader>{t('license.smallheader-0')}</SmallHeader>
				<SubHeader>{t('license.subheader-2')}</SubHeader>
				<Ul>
					<Li>{t('license.li-0')}</Li>
					<Li>{t('license.li-1')}</Li>
					<Li>{t('license.li-2')}</Li>
				</Ul>
				<SubHeader>{t('license.subheader-3')}</SubHeader>
				<SmallHeader>{t('license.holders')}</SmallHeader>
				<Link href="http://creativecommons.org/licenses/by/4.0" target="_blank">
					CC BY 4.0
				</Link>
				<SubHeader>{t('license.subheader-4')}</SubHeader>
				<Ul>
					<Li>{t('license.li-3')}</Li>
					<Li>{t('license.li-4')}</Li>
					<Li>{t('license.li-5')}</Li>
				</Ul>
				<SmallHeader>{t('license.non-holders')}</SmallHeader>
				<Link href="http://creativecommons.org/licenses/by-nc/4.0" target="_blank">
					CC BY-NC 4.0
				</Link>
				<SubHeader>{t('license.subheader-5')}</SubHeader>
				<Ul>
					<Li>{t('license.li-3')}</Li>
					<Li>{t('license.li-6')}</Li>
					<Li>{t('license.li-5')}</Li>
				</Ul>
				<SubHeader>
					<H3>{t('license.uwucrewTeam')}</H3>
					{t('license.subheader-6')}
				</SubHeader>
				<SubHeader>{t('license.subheader-7')}</SubHeader>
				<SmallHeader>{t('license.smallheader-1')}</SmallHeader>
				<SubHeader>{t('license.subheader-8')}</SubHeader>
				<SubHeader>{t('license.subheader-9')}</SubHeader>
				<SubHeader>{t('license.subheader-10')}</SubHeader>
				<SubHeader>{t('license.subheader-11')}</SubHeader>
				<SmallHeader>{t('license.smallheader-2')}</SmallHeader>
				<SubHeader>{t('license.subheader-12')}</SubHeader>
				<SubHeader>{t('license.subheader-13')}</SubHeader>
				<Ul>
					<Li>{t('license.li-7')}</Li>
					<Li>{t('license.li-8')}</Li>
					<Li>{t('license.li-9')}</Li>
				</Ul>
				<Link href="https://creativecommons.org/share-your-work/public-domain/cc0" target="_blank">
					{t('license.smallheader-2')} CC0
				</Link>
				<SubHeader>{t('license.subheader-14')}</SubHeader>
				<Ul>
					<Li>{t('license.li-10')}</Li>
					<Li>{t('license.li-11')}</Li>
				</Ul>
				<SmallHeader>{t('license.smallheader-3')}</SmallHeader>
				<SubHeader>{t('license.subheader-15')}</SubHeader>
				<SubHeader>{t('license.subheader-16')}</SubHeader>
				<Uwus>
					{theCrew.map((uwu: number) => (
						<UwuContainer href={`https://opensea.io/assets/ethereum/0xf75140376d246d8b1e5b8a48e3f00772468b3c0c/${uwu}`} target="_blank">
							<UwuImage src={`https://firebasestorage.googleapis.com/v0/b/uwucrew-thumbnails/o/${uwu}.png?alt=media`} />
							<UwuText>{`uwu: #${uwu}`}</UwuText>
						</UwuContainer>
					))}
				</Uwus>
			</Content>
		</StyledLicense>
	);
};

export default License;
