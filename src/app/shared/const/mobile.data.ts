import { Imobile } from "../models/practice.interface";

export const mobileProducts :Array<Imobile>= [
    {
      id: 1,
      name: 'iPhone 13',
      brand: 'Apple',
      price: 59999,
      Oprice:79999,
      Disscount:'15% off',  
      Delivery: 'Free Delivery',
      Bank:'Bank offer',
      status:true,
      stock:'Only few left..!!',
      image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
      isAvailable: true,
      rating : 4.9,
      specifications:["128 GB ROM",
            "15.49 cm (6.1 inch) Super Retina XDR Display",
            "12MP + 12MP | 12MP Front Camera",
            "A15 Bionic Chip Processor"]
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      brand: 'Samsung',
      price: 99899,
      Oprice:110000,
      Disscount:'15% off',
      Delivery: 'Free Delivery',
      Bank:'Bank offer',
      status:false,
      stock:'',
      image: '',
      isAvailable: false,
      rating : 4.5,
      specifications:["12 GB RAM | 256 GB ROM",
                    "17.27 cm (6.8 inch) Quad HD+ Display",
                    "108MP + 12MP + 10MP + 10MP | 40MP Front Camera",
                    "5000 mAh Lithium-ion Battery",
                    "Exynos 2100 Processor"]
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      brand: 'Google',
      price: 57799,
      Oprice:77699,
      Disscount:'15% off',
      Delivery: 'Free Delivery',
      status:false,
      stock:'',
      Bank:'Bank offer',
      image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png',
      isAvailable: false,
      rating : 3.9,
      specifications:["6 GB RAM | 128 GB ROM",
                    "15.6 cm (6.14 inch) Full HD+ Display",
                    "12.2MP + 12MP | 8MP Front Camera",
                    "4410 mAh Battery",
                    "Google Tensor Processor"]
    },
    {
      id: 4,
      name: 'OnePlus 9 Pro',
      brand: 'OnePlus',
      price: 38899,
      Oprice:49999,
      Disscount:'18% off',
      Delivery: 'Free Delivery',
      Bank:'Bank offer',
      status:false,
      stock:'Only few left..!!',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/a/11r-5g-5011102525-oneplus-original-imagn3afeqfr6acy.jpeg?q=70',
      isAvailable: true,
      rating : 2.9,
      specifications:["12 GB RAM | 256 GB ROM",
                "17.02 cm (6.7 inch) Display",
                "48MP Rear Camera",
                "4500 mAh Battery",
                "Snapdragon Processor"]
    },
    {
      id: 5,
      name: 'Xiaomi Mi 11',
      brand: 'Xiaomi',
      price: 55699,
      Oprice:69999,
      Disscount:'20% off',
      Delivery: 'Free Delivery',
      Bank:'Bank offer',
      status:true,
      stock:'Only 9 left..!!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
      isAvailable: true,
      rating : 4.8,
      specifications:["16 GB RAM | 512 GB ROM",
                "17.09 cm (6.73 inch) Display",
                "50MP + 50MP + 50MP + 50MP | 32MP Front Camera",
                "5000 mAh Battery",
                "Snapdragon 8 Gen 3 Mobile Platform Processor"]
    },
    {
      id: 6,
      name: 'Sony Xperia 1 III',
      brand: 'Sony',
      price: 29999,
      Oprice:37999,
      Disscount:'17% off',
      Delivery: 'Free Delivery',
      Bank:'Bank offer',
      status:true,
      stock:'Only 10 left..!!',
      image: 'https://rukminim2.flixcart.com/image/312/312/mobile/q/n/z/sony-xperia-l-original-imadwjhtrqkmyhry.jpeg?q=70',
      isAvailable: true,
      rating : 2.5,
      specifications:["4 GB RAM | 32 GB ROM | Expandable Upto 256 GB",
                "13.97 cm (5.5 inch) Full HD Display",
                "23MP Rear Camera | 8MP Front Camera",
                "3430 mAh Battery",
                "Helio P20 Octa Core 64bit Processor"]
    },
    {
      id: 7,
      name: 'LG Velvet',
      brand: 'LG',
      price: 15599,
      Oprice:20999,
      Disscount:'25% off',
      Delivery: 'Free Delivery',
      Bank:'Bank offer',
      status:false,
      image: 'https://rukminim2.flixcart.com/image/312/312/kgsb1jk0/mobile/h/r/e/lg-velvet-dual-screen-lmg910emw-original-imafwy7ytk8y3ucw.jpeg?q=70',
      stock:'',
      isAvailable: false,
      rating : 1.5,
      specifications:["6 GB RAM | 128 GB ROM | Expandable Upto 2 TB",
                "17.27 cm (6.8 inch) Full HD+ Display",
                "48MP + 8MP + 5MP | 16MP Front Camera",
                "4300 mAh Lithium Polymer Battery",
                "Qualcomm Snapdragon 845 Processor"]
    },
    {
      id: 8,
      name: 'Huawei P40 Pro',
      brand: 'Huawei',
      price: 28899,
      Oprice:38999,
      Disscount:'25% off',
      Delivery: 'Free Delivery',
      Bank:'Bank offer',
      status:false,
      stock:'Only few left..!!',
      image: '',
      isAvailable: true,
      rating : 3.5,
      specifications:["4 GB RAM | 128 GB ROM",
            "16.74 cm (6.59 inch) Full HD+ Display",
            "16MP + 8MP + 2MP | 16MP Front Camera",
            "4000 mAh Battery",
            "HiSilicon Kirin 710F AI Chipset with Dual-NPU Processor"]
    },
    {
      id: 9,
      name: 'Motorola Moto G Power',
      brand: 'Motorola',
      price: 42249,
      Oprice:62999,
      Disscount:'21% off',
      Delivery: 'Free Delivery',
      Bank:'Bank offer',
      status:true,
      stock:'Only 20 left..!!',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/k/9/g34-5g-pb1v0001in-motorola-original-imagwu4r4xze9jwz.jpeg?q=70',
      isAvailable: true,
      rating : 4.5,
      specifications:["6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            "16.94 cm (6.67 inch) Full HD+ Display",
            "48MP + 8MP + 2MP | 16MP Front Camera",
            "5000 mAh Li-Polymer Battery",
            "Qualcomm Snapdragon 750G Processor",
            "20 W Fast Charging",
            "Stock Android Experience"]
    },
    {
      id: 10,
      name: 'Nokia 8.3',
      brand: 'Nokia',
      price: 20499,
      Oprice:29999,
      Disscount:'19% off',
      Delivery: 'Free Delivery',
      Bank:'Bank offer',
      status:false,
      stock:'',
      image: '',
      isAvailable: true,
      rating : 4.5,
      specifications:["4 GB RAM | 128 GB ROM",
            "16.66 cm (6.56 inch) Display",
            "50MP Rear Camera",
            "5000 mAh Battery",
            "EMI starting from ₹387/month",
            "Cash on Delivery",
            "Net banking & Credit/ Debit/ ATM card"]
   
    }
  
  ];