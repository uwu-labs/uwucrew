import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	margin: 4rem;
	font-family: 'Roboto', sans-serif !important;

	font-size: 1.7rem !important;
	line-height: 2.3rem;
	caption-side: top;
	border: none;
	border-collapse: collapse;
	/* border-collapse: separate; */
	/* border-spacing: 5px 10px; */

	caption-side: bottom;
	/* empty-cell: show | hide;  */
	/* empty-cell is a property of table or the cells themselves */

	/* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

	/* tbody {
    vertical-align: top;
  }              */
	td,
	th {
		border: none;
	}
	td,
	th {
		border: 1px solid;
	}

	td {
		padding: 5px 10px;
	}

	tbody tr {
		:nth-of-type(odd) {
			background-color: #efefef;
		}
		:hover {
			background-color: lightpink;
		}
	}
	thead > tr {
		background-color: #c2c2c2;
	}
	caption {
		font-size: 0.9em;
		padding: 5px;
		font-weight: bold;
	}
`;

const data = [
	{
		prize: 'Custom Commision by Laur of any NFT you own',
		amount: "Claimed!",
		condition: 'Turn in 27 stamps, 3 of each type'
	},
	{
		prize: 'Custom uwucrew rug*',
		amount: 2,
		condition: 'Turn in 9 stamps, 1 of each type'
	},
	{
		prize: 'Full set of uwucrew Merch',
		amount: 3,
		condition: 'Turn in 9 stamps, 1 of each type'
	},
	{
		prize: 'System Solaris Insignia',
		amount: 'Unlimited (1 max per wallet)',
		condition: 'Turn in 9 stamps, 1 of each type***'
	},
	{
		prize: 'Any NFT in uwu Quest wallet**',
		amount: 'While supplies last (20)',
		condition: 'Turn in any 6 stamps (duplicates count)'
	}
];

export const TableMarkup = () => (
	<StyledTable>
		<table className="table table-striped">
			<tr>
				<th>Prize</th>
				<th>Amount</th>
				<th>Condition</th>
			</tr>
			{data.map((val, key) => {
				return (
					<tr key={key}>
						<td>{val.prize}</td>
						<td>{val.amount}</td>
						<td>{val.condition}</td>
					</tr>
				);
			})}
		</table>
	</StyledTable>
);
