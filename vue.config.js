module.exports = {
  publicPath: process.env.NODE_ENV == "production" ? "/municipalcourts/" : ""
};

//two separate builds - change publicPath value to "/municipalcourts/" for apps.cityoflewisville.com, "/eservices/municipalcourts/" for payment.cityoflewsville.com
