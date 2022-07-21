import React from "react";
import banner3 from '../../img/banner3.png';
import style from '../../css/bannersStyle.module.css';
import linha_banner3 from '../../img/linha_banner3.png';
import ftQuemSomos1 from '../../img/ftQuemSomos1.png';
import ftQuemSomos2 from '../../img/ftQuemSomos2.png';
import quemSomos from '../../../img/quemSomos.png';


class banner3Somos extends React.Component{

    render(){
        return(
            <div className='divBanner'>
				<div className='imgBanner'>
					<img id='quemSomos' className={style.circle} src={banner3} alt='banner3Somos' />
                    <h1 className={style.tituloBanner3}>Quem somos</h1>
					<img src={linha_banner3} alt='linhaBanner2' />
				</div>

                <div>
                    {/* <img src={quemSomos}></img> */}
                    <p className={style.fontQuemSomos}>
                    Lorem ipsum dolor sit amet. Quo quis voluptatem sed <br></br>
                    consequatur officiis ut corporis rerum et accusantium <br></br>
                    animi qui quisquam sequi qui aliquam dolorem. <br></br>
                    Qui aspernatur error in mollitia libero sed perspiciatis <br></br>
                    quam quo explicabo amet. Et corporis voluptas sed inventore <br></br>
                    consequatur eum aspernatur cumque est error laboriosam et molestias<br></br>
                    neque sed nobis quasi aut harum totam. Eum repellendus earum ut <br></br>
                    voluptate neque est quam quos qui consequuntur omnis vel <br></br>
                    praesentium aliquid ut necessitatibus galisum et voluptate . <br></br>
                    Lorem ipsum dolor sit amet.<br></br> 
                    Quo quis voluptatem sed
                    consequatur officiis ut corporis rerum et accusantium <br></br>
                    animi qui quisquam sequi qui aliquam dolorem. <br></br>
                    Qui aspernatur error in mollitia libero sed perspiciatis <br></br>
                    quam quo explicabo amet. Et corporis voluptas sed inventore <br></br>
                    consequatur eum aspernatur cumque est error laboriosam et molestias<br></br>
                    neque sed nobis quasi aut harum totam. Eum repellendus earum ut <br></br>
                    voluptate neque est quam quos qui consequuntur omnis vel <br></br>
                    praesentium aliquid ut necessitatibus galisum et voluptate .
                    </p>
                    <div className={style.ftQuemSomos1}>
                        <img src={ftQuemSomos2}></img>
                        <img src={ftQuemSomos1}></img>
                    </div>
                   
                </div>
			</div>
        );
    }
    
}

export default banner3Somos;