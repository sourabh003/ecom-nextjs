import React from 'react'

export default function SingleProductPage() {
  return (
    <div>SingleProductPage</div>
  )
}

export const getServerSideProps = async (ctx) => {
	/** single product api to be called here */
	return { props: {  } };
};