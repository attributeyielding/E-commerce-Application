<!-- Doc 2 is in language en-US. Optimizing Doc 2 for scanning, using lists and bold where appropriate, but keeping language en-US, and adding id attributes to every HTML element: --><h1 id="avpvqg">E-Commerce API</h1>
<p id="ojgm5ds"><strong>This is a RESTful API</strong> for managing an e-commerce platform. It provides endpoints for managing:</p>
<ul id="ojgm5ds">
<li id="ojgm5ds">Users</li>
<li id="ojgm5ds">Products</li>
<li id="ojgm5ds">Orders</li>
<li id="ojgm5ds">Reviews</li>
<li id="ojgm5ds">Cart</li>
<li id="ojgm5ds">Payments</li>
<li id="ojgm5ds">Wishlist</li>
<li id="ojgm5ds">Currencies</li>
</ul>
<p id="ojgm5ds">The API is built using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MySQL</strong>, and it includes <strong>Swagger documentation</strong> for easy testing and exploration.</p>
<h2 id="6oa62bp">Features</h2>
<ul id="9fnn3yy">
<li id="luaqqs"><strong>User Management</strong>: Create, read, update, and soft delete users.</li>
<li id="zch0zhe"><strong>Product Management</strong>: Create, read, update, and soft delete products.</li>
<li id="hmyy8xy"><strong>Order Management</strong>: Create, read, update, and soft delete orders.</li>
<li id="aaazrni"><strong>Order Details</strong>: Manage order details, including products, quantities, and discounts.</li>
<li id="inpoybl"><strong>Reviews</strong>: Allow users to leave reviews for products.</li>
<li id="dnacwy4"><strong>Cart</strong>: Manage user shopping carts.</li>
<li id="m4l4hr"><strong>Payments</strong>: Handle payment transactions.</li>
<li id="mgm84qa"><strong>Wishlist</strong>: Allow users to add products to their wishlist.</li>
<li id="7i9b1bt"><strong>Currencies</strong>: Manage currency conversion rates.</li>
</ul>
<h2 id="8gx7ghe">Technologies Used</h2>
<ul id="y6t4kyn">
<li id="23g7s4"><strong>Node.js</strong>: A JavaScript runtime for building scalable network applications.</li>
<li id="kln21pa"><strong>Express</strong>: A web framework for Node.js.</li>
<li id="f35hj26"><strong>MySQL</strong>: A relational database management system.</li>
<li id="p85gv2"><strong>Swagger</strong>: For API documentation and testing.</li>
</ul>
<h2 id="j9b2st">Getting Started</h2>
<h3 id="h3gnkp">Prerequisites</h3>
<ul id="c07p2gp">
<li id="0a0jc2">Node.js installed on your machine.</li>
<li id="svhddp2">MySQL server running locally or remotely.</li>
<li id="bhugg5">Basic knowledge of RESTful APIs and JavaScript.</li>
</ul>
<h3 id="k7hn9o">Installation</h3>
<ol start="1" id="n36j5ri">
<li id="259v2sp"><strong>Clone the repository</strong>:</li>
<pre id="3lqcxx"><span id="yphcgyc">git</span> clone https://github.com/yourusername/e-commerce-api.git
<span id="070lqxe">cd</span> e-commerce-api</pre>
<li id="o7rwd7q"><strong>Install dependencies</strong>:</li>
<pre id="g6l8s"><span id="4p9owki">npm</span> <span id="z7pfbnc">install</span></pre>
<li id="jfnj89r"><strong>Set up the database</strong>:</li>
<ul id="39m3plg">
<li id="u0qmpk">Create a MySQL database named <code id="hk1sjdf">your_database_name</code>.</li>
<li id="asbqpqn">Update the database connection details in the <code id="c5xb5">db</code> configuration in <code id="d9nu9k4">app.js</code>:</li>
<pre id="v5qzzb5"><span id="e75ecu2p">const</span> db <span id="ro1da5o">=</span> mysql<span id="csz5ayk">.</span><span id="zn6lpxc">createConnection</span><span id="hic3h1q">(</span><span id="dhmybse">{</span>
  <span id="7qf7zht">host</span><span id="mqk50v">:</span> <span id="ytsfg1q">'localhost'</span><span id="gfuw7el">,</span>
  <span id="p3z6mkr">user</span><span id="okr73uq">:</span> <span id="9ih5dz">'root'</span><span id="vtu5kk">,</span>
  <span id="d4k5jeh">password</span><span id="jd9ejr">:</span> <span id="r1wgcp7">'password'</span><span id="hrrbr8">,</span>
  <span id="sz3m3my">database</span><span id="srzfo1">:</span> <span id="847yy27">'your_database_name'</span><span id="yrbqyq">,</span>
<span id="hvokc5k">}</span><span id="yfnozsn">)</span><span id="qs0cds">;</span></pre>
</ul>
</li>
<li id="fwzn2zi"><strong>Run the server</strong>:</li>
<pre id="llkylt"><span id="20k1q4n">npm</span> start</pre>
<li id="4568cer"><strong>Access the API</strong>:</li>
<ul id="5a1733g">
<li id="r9z9iea">The API will be running at <code id="f0p9pa5">http://localhost:3000</code>.</li>
<li id="ou9ar7">Swagger documentation will be available at <code id="o64e6n9">http://localhost:3000/api-docs</code>.</li>
</ul>
</li>
</ol>
<!-- Doc 2 is in language en-US. Optimizing Doc 2 for scanning, using lists and bold where appropriate, but keeping language en-US, and adding id attributes to every HTML element: --><h2 id="ggsoqe9">API Endpoints</h2>

<h3 id="uc3zczu">Users</h3>
<p id="uc3zczu">The following endpoints are available for managing users:</p>
<ul id="irmfron">
<li id="b76cav"><strong id="kosaeid">GET /users</strong>: Get all users.</li>
<li id="tfswj59"><strong id="btclm4">GET /users/{id}</strong>: Get a user by ID.</li>
<li id="z0szxif"><strong id="c0z6347">POST /users</strong>: Create a new user.</li>
<li id="hglroke"><strong id="2pawqc">PUT /users/{id}</strong>: Update a user by ID.</li>
<li id="54452h"><strong id="9p988mm">DELETE /users/{id}</strong>: Soft delete a user by ID.</li>
</ul>

<h3 id="s5yvsm">Products</h3>
<p id="s5yvsm">The following endpoints are available for managing products:</p>
<ul id="8jx9ptp">
<li id="8dik9i7"><strong id="lg1arb2j">GET /products</strong>: Get all products.</li>
<li id="whfz1j"><strong id="q8mq644">GET /products/{id}</strong>: Get a product by ID.</li>
<li id="luixt88"><strong id="d9t2ger">POST /products</strong>: Create a new product.</li>
<li id="6u3sjm"><strong id="8gtus0s">PUT /products/{id}</strong>: Update a product by ID.</li>
<li id="vmdl739"><strong id="4t703i9">DELETE /products/{id}</strong>: Soft delete a product by ID.</li>
</ul>

<h3 id="b8681b">Orders</h3>
<p id="b8681b">The following endpoints are available for managing orders:</p>
<ul id="p5d29y">
<li id="e6e6ytm"><strong id="f0n2k3d">GET /orders</strong>: Get all orders.</li>
<li id="74t714h"><strong id="26b00df">GET /orders/{id}</strong>: Get an order by ID.</li>
<li id="s92amsu"><strong id="wfvgof">POST /orders</strong>: Create a new order.</li>
<li id="whgfo5"><strong id="xm09u1m">PUT /orders/{id}</strong>: Update an order by ID.</li>
<li id="6p1pdvo"><strong id="yg8t0xm">DELETE /orders/{id}</strong>: Soft delete an order by ID.</li>
</ul>

<h3 id="yyy9aug">Order Details</h3>
<p id="yyy9aug">The following endpoints are available for managing order details:</p>
<ul id="fgch6o">
<li id="2s9bc0cb"><strong id="glibc1">GET /order-details</strong>: Get all order details.</li>
<li id="fhb5u9"><strong id="qf17u83">GET /order-details/{id}</strong>: Get order details by ID.</li>
<li id="fn7ar3o"><strong id="6fvn2a">POST /order-details</strong>: Create new order details.</li>
<li id="ahv4tk"><strong id="9wdvyzm">PUT /order-details/{id}</strong>: Update order details by ID.</li>
<li id="2cazelp"><strong id="wbm0st">DELETE /order-details/{id}</strong>: Delete order details by ID.</li>
</ul>

<h3 id="dj38q2c">Reviews</h3>
<p id="dj38q2c">The following endpoints are available for managing reviews:</p>
<ul id="gdearxk">
<li id="ultvv05"><strong id="o71x2kj">GET /reviews</strong>: Get all reviews.</li>
<li id="q4y88b8"><strong id="bnlorui">GET /reviews/{id}</strong>: Get a review by ID.</li>
<li id="wjccekl"><strong id="954uxwv">POST /reviews</strong>: Create a new review.</li>
<li id="kxmdcdb"><strong id="d3j7rck">PUT /reviews/{id}</strong>: Update a review by ID.</li>
<li id="80dxw2n"><strong id="0ou6p92">DELETE /reviews/{id}</strong>: Delete a review by ID.</li>
</ul>

<h3 id="kmu2rhm">Cart</h3>
<p id="kmu2rhm">The following endpoints are available for managing the cart:</p>
<ul id="koso1hg">
<li id="hsyd1r"><strong id="8zfcl8">GET /cart</strong>: Get all cart items.</li>
<li id="5wl2iih"><strong id="dsfb7j">GET /cart/{id}</strong>: Get a cart item by ID.</li>
<li id="jv0h9ge"><strong id="i625fa">POST /cart</strong>: Add an item to the cart.</li>
<li id="67x9e3i"><strong id="xcxsc2c">PUT /cart/{id}</strong>: Update a cart item by ID.</li>
<li id="3217ez"><strong id="7a26hg">DELETE /cart/{id}</strong>: Delete a cart item by ID.</li>
</ul>

<h3 id="f4zsv3h">Payments</h3>
<p id="f4zsv3h">The following endpoints are available for managing payments:</p>
<ul id="bs6gq97">
<li id="1ug4er8l"><strong id="hgujroq">GET /payments</strong>: Get all payments.</li>
<li id="jw7vq18"><strong id="8kwq0ym">GET /payments/{id}</strong>: Get a payment by ID.</li>
<li id="fawnblf"><strong id="1x3d8vs">POST /payments</strong>: Create a new payment.</li>
<li id="tmgz7un"><strong id="rf19dg">PUT /payments/{id}</strong>: Update a payment by ID.</li>
<li id="xk8o6rs"><strong id="h4mq3z">DELETE /payments/{id}</strong>: Delete a payment by ID.</li>
</ul>
<!-- Doc 2 is in language en-US. Optimizing Doc 2 for scanning, using lists and bold where appropriate, but keeping language en-US, and adding id attributes to every HTML element: --><h3 id="x13qu3">Wishlist</h3>
<p id="x13qu3">Here are the available API endpoints for managing your wishlist:</p>
<ul id="dp9bag8">
<li id="wlsocxi"><strong id="5kgggyd">GET /wishlist</strong>: Get all wishlist items.</li>
<li id="14sjp55"><strong id="r9pqlh">GET /wishlist/{id}</strong>: Get a wishlist item by ID.</li>
<li id="x21vwor"><strong id="whovvyh">POST /wishlist</strong>: Add an item to the wishlist.</li>
<li id="pidrht7"><strong id="i6wplt">PUT /wishlist/{id}</strong>: Update a wishlist item by ID.</li>
<li id="y3gbsy"><strong id="4jrw3qv">DELETE /wishlist/{id}</strong>: Delete a wishlist item by ID.</li>
</ul>
<h3 id="mde4oel">Currencies</h3>
<p id="mde4oel">Here are the available API endpoints for managing currencies:</p>
<ul id="4e530x">
<li id="j9mou41j"><strong id="vkp2fbg">GET /currencies</strong>: Get all currencies.</li>
<li id="0svu62j"><strong id="n2xuxee">GET /currencies/{code}</strong>: Get a currency by code.</li>
<li id="hpwi77j"><strong id="dswpyv">POST /currencies</strong>: Create a new currency.</li>
<li id="965mtzd"><strong id="wsar369">PUT /currencies/{code}</strong>: Update a currency by code.</li>
<li id="9oy9xgj"><strong id="e7x6ohq">DELETE /currencies/{code}</strong>: Delete a currency by code.</li>
</ul>
<h2 id="qo0p6y">Testing the API</h2>
<p id="0ql9ed">You can test the API using the <strong>Swagger UI</strong> available at <code id="jm7yo2v">http://localhost:3000/api-docs</code>. The Swagger UI provides an interactive interface to explore and test all the API endpoints.</p>
<h2 id="sdwm9wp">Contributing</h2>
<p id="klbic6n"><strong>Contributions are welcome!</strong> Please open an issue or submit a pull request for any improvements or bug fixes.</p>
<h2 id="ytoyjie">License</h2>
<p id="2ihn0ps">This project is licensed under the <strong>MIT License</strong>. See the <a href="https://chat.deepseek.com/a/chat/s/LICENSE" target="_blank" rel="noreferrer" id="pqxtzb">LICENSE</a> file for details.</p>
<h2 id="tepifvv">Acknowledgments</h2>
<p id="tepifvv">We would like to thank:</p>
<ul id="agqq7">
<li id="wiku4f">The <strong>Node.js</strong> and <strong>Express</strong> communities for their excellent documentation and support.</li>
<li id="yko9ddtm">The <strong>Swagger</strong> team for providing an excellent tool for API documentation.</li>
</ul>
