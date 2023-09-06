import React from 'react'
import { useGlobalContext } from './styles/context'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import {Button} from "./styles/Button";

const Services = () => {
  const {services} = useGlobalContext();
  console.log(services);
  return (
    <Wrapper classname="section">
    <h2 className='common-heading'>Our Services</h2>
    <div className="container grid grid-three-column">
      {
        services.map((currElem) =>{
         const {id, name, image, description} = currElem;
         return (
          <div key={id} className='card'>
          <figure>
            <img src={image} alt={name}  />
          </figure>
          <div className='card-data'>
             <h3>{name}</h3>
             <p>{description}</p>
             <Navlink to="/service"></Navlink>
             <Button>Read More</Button>

          </div>
          </div>
         )
        } )
      }
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section``;

export default Services
