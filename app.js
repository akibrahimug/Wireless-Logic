// Require the request object
const request = require('request');

// Require the cheerio a jquery dependancy for backend
const cheerio = require('cheerio');

// Initialize a function to handle data request
const application = () =>  {
    return  request("https://wltest.dns-systems.net/", (error, result, body) => {
    
    // Error handling code and cheerio loading
    if(error && result.statusCode === 200){
        reject(err)
    }else{
        const $ = cheerio.load(body)
        // Empty Array that will populate with the data when it comes in
        let newArray = [];

        // Iterate through the dom structure looking for instances of "pricing-table package-features"
        const products = $('.pricing-table .package-features').each((i, dataTable) => {
            // Sort data in variables and turn data to text/strings when it comes in
            // Product names
            const optionTitle = $(dataTable).find('.package-name').text();
            // Product descriptions
            const description = $(dataTable).find('.package-description').text();
            // Product Prices
            const price = $(dataTable).find('.package-price .price-big').text();
            // Product Discounts
            const discount = $(dataTable).find('.package-price p').text();
            
        // Push all the data got back as objects to the "newArray" to be used outside the iterator
        newArray.push({optionTitle, description, price, discount})
    })

    // Console log the array of objects and call the reverse() object so we start with the annual packages with the highest costs
   console.log(newArray.reverse())
    }
    
})

}
// Call the function
application();
// Export for testing
module.exports.application = application
