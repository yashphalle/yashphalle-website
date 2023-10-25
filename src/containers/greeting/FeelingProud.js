import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      
       <img alt="saad sitting on table" src={require("../../assests/images/photo.jpg")} style={{ width: "700px", height: "700px" }} ></img> 

      
    );
  }
}

export default FeelingProud;
// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// class FeelingProud extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };

//     return (
//       <Slider {...settings}>
//         <div>
//           <img
//             alt="Image 1"
            
//             src={require("../../assets/images/ibm_logo.png")}
//             style={{ width: "700px", height: "700px" }}
//           />
//         </div>
//         <div>
//           <img
//             alt="Image 2"
//             src={require("../../assets/images/freecopy_logo.png")}
//             style={{ width: "700px", height: "700px" }}
//           />
//         </div>
//         <div>
//           <img
//             alt="Image 3"
//             src={require("../../assets/images/github_logo.png.jpg")}
//             style={{ width: "700px", height: "700px" }}
//           />
//         </div>
//         <div>
//           <img
//             alt="Image 4"
//             src={require("../../assets/images/photo4.jpg")}
//             style={{ width: "700px", height: "700px" }}
//           />
//         </div>
//       </Slider>
//     );
//   }
// }

// export default FeelingProud;
