import styled from 'styled-components';

const Loader = () => {

  const StyledLoader = styled.div`
    position: relative;
    
    :after {
      content: '';
      background: #000;
      position: fixed;
      left: 50%;
      top: 25%;
      width: 32px;
      height: 32px;
      border-radius:4px;
      transform-origin: -16px -32px;
      animation: rotate 1s linear infinite;
    }
    @keyframes rotate {
      0% , 100% {
          transform: rotate(-45deg)  translate(-50% , -50%)
        }
      50% {
          transform: rotate(-245deg)  translate(-50% , -50%)
      }
    }
  `; 

  return (
    <StyledLoader></StyledLoader>
  )
}

export default Loader