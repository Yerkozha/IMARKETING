const headerIcon = require('../assets/icons/icon-header.svg')
const template = document.createElement('template');
template.innerHTML = `
<style>
*{
  margin: 0;
  padding: 0;
  box-size: border-box;
}
.navigation{
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigation__title{
  padding-left: 40px;
  position: relative;
  font-weight: 600;
  font-size: 1.5625rem;
  line-height: 22px;
  height: 22px;
  
}
.navigation__title::before {
  content: '';
  position:absolute;
  left: 0;
  width: 25px;
  height: 25px;
  background: url(${headerIcon}) no-repeat;
  background-size: contain;
  display: inline-block;
}
.navigation__list{
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  font-size: 0.875rem;
  padding-left: 6em;
}
li {
  margin-left: 1em;
}
li:hover{
  color: #FF9900;
  cursor: pointer;
}

.btn{
  background: transparent;
  border: none;
  outline: 1px solid #BCD0E5;
  border-radius: 4px;
  padding: 8px 18px;
  font-family: Poppins;
  font-weight: 600;
}

</style>                     
<div class="navigation">
<h1 class="navigation__title">Productly</h1>
<ul class="navigation__list">
<li>Product</li>
<li>Customers</li>
<li>Pricng</li>
<li>Resources</li>
</ul>
<div class="navigation__btn">
<button class="btn">Sign In</button>
<button class="btn" style="background-color: #FF9900; color: #ffffff; margin-left: 12px;">Sign Up</button>
</div>
</div>
`;

class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {

  }
  static get observedAttributes() {
    return ['']
  }
}
customElements.define('custom-header', CustomHeader);

