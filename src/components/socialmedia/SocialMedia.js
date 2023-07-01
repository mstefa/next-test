import React from 'react'
import { StyledSocialMedia } from './StyledSocialMedia'

export default function NavBar() {
  return (
    <StyledSocialMedia>

      <ul>
        <li> <a href='https://www.linkedin.com/in/matiasstefanutti/'  target="blank" > <i class="fab fa-linkedin-in"> </i> </a>  </li>
        <li> <a href='https://github.com/mstefa'  target="blank" > <i class="fab fa-github"></i> </a>  </li>
        <li> <a href='mailto:mstefanutti24@gmail.com' target="blank" > <i class="fas fa-envelope-open-text"></i> </a> </li>
        <li> <a href='https://twitter.com/mstefanutti'  target="blank" > <i class="fab fa-twitter"></i> </a> </li>
        <li> <div class="line"></div> </li>
        {/* <i className="fas fa-shoe-prints"></i> */}
      </ul>

    </StyledSocialMedia>
  )
}
