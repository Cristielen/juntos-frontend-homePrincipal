import React from 'react';
import banner2 from '../../img/banner2.png';
import style from '../../css/bannersStyle.module.css';
import linha_banner2 from '../../img/linha_banner2.png';


class Banner2 extends React.Component {

	render() {
		return (
			<div className='divBanner2'>
				<div className='imgBanner2'>
					<img className={style.bannerStyle} src={banner2} alt='banner2' />
					<h1 className={style.tituloBanner2}>Ranking</h1>
					<img src={linha_banner2} alt='linhaBanner2' />
				</div>
			</div>

		);
	}
}

export default Banner2;