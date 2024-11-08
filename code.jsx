import "./exx.css";
import React, { useEffect } from 'react';


function Section11() {
  const fcData = [
    { name: 'Feature 1', spec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Feature 2', spec: 'Praesent vehicula, nunc ut ultricies eleifend, lectus arcu euismod.' },
    { name: 'Feature 3', spec: 'Donec aliquam eros vel nulla interdum, a accumsan nunc interdum.' },
    { name: 'Feature 4', spec: 'Curabitur tincidunt velit ut neque aliquet, in efficitur justo mollis.' },
    { name: 'Feature 5', spec: 'Suspendisse potenti. Sed facilisis lorem vel eros tincidunt pharetra.' },
    { name: 'Feature 6', spec: 'Vivamus laoreet purus vel nulla dapibus, nec varius sapien ultricies.' }
  ];

 

  return (
    <div className='section'>
      <aside className='section-detail'>
        <h2>Specifications</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies neque non felis bibendum feugiat.</p>
        <div className='section-container'>
          {fcData.map((data, index) => (
            <div key={index} className='section-card'>
              <h3>{data.name}</h3>
              <p>{data.spec}</p>
            </div>
          ))}
        </div>
      </aside>
      <aside className='section-img'>
        <img src='/assets/sprite.png' alt="Sample Transmitter" />
      </aside>
    </div>
  );
}

export default Section11;


// css for this section


// .section {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 7rem 13rem;
//   background-color: hsla(0, 0%, 0%, 1);
//   background-image: radial-gradient(at 100% 53%, hsla(135, 91%, 49%, 0.87) 0px, transparent 50%),
//     radial-gradient(at 100% 48%, hsla(207, 91%, 30%, 0.637) 0px, transparent 60%);
//   background-attachment: local;
//   background-color: rgb(228, 228, 228);
// }

// .section-detail {
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// }

// .section-detail h2 {
//   color: rgb(45, 90, 133);
//   font-size: var(--fs-xl);
//   font-weight: 500;
//   text-transform: uppercase;
// }

// .section-detail p {
//   color: #235f32;
// }

// .section-container {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
// }

// .section-card {
//   width: calc(50% - 0.8rem);
//   box-sizing: border-box;
//   height: 10rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: rgba(255, 255, 255, 0.02);
//   border-radius: 16px;
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(6px);
//   -webkit-backdrop-filter: blur(6px);
//   padding-left: 1em;
// }

// .section-card h3 {
//   color: rgb(0, 0, 0);
//   font-weight: 500;
// }

// .section-card p {
//   font-size: var(--fs-xs);
//   color: #2e2e2e;
//   width: 90%;
// }

// .section-img {
//   width: 40%;
// }

// .section-img img {
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
// }


// @media screen and (max-width: 767px) {
//   .section {
//     padding: 2rem 1rem;
//     background-image: none;
//     background-color: #000000 !important;
//   }

//   .section-img {
//     display: none;
//   }

//   .section-detail h2 {
//     font-size: var(--fs-m);
//     font-weight: 700;
//   }

//   .section-detail p {
//     font-size: var(--fs-xs);
//   }

//   .section-detail {
//     flex-direction: column;
//     text-align: center;
//   }

//   .section-container {
//     flex-direction: column;
//     gap: 0.5rem;
//     padding: 0em 1em;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .section-card {
//     width: 90%;
//     height: 7em;
//     border: 1px solid rgb(56, 56, 55);
//     padding-left: 0%;
//   }

//   .section-card h3 {
//     font-size: var(--fs-s);
//   }

//   .section-card p {
//     width: 100%;
//     font-size: var(--fs-xs);
//     text-align: center;
//   }
// }


// @media screen and (min-width: 768px) and (max-width: 1024px) {
//   .section {
//     padding: 4rem 2rem;
//   }

//   .section-detail {
//     flex-direction: column;
//     text-align: center;
//   }

//   .section-container {
//     flex-direction: column;
//     gap: 1rem;
//   }

//   .section-card {
//     width: 100%;
//     height: auto;
//   }

//   .section-img {
//     width: 100%;
//     margin-top: 2rem;
//   }
// }
