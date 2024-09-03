import Card from "./Components/Card.jsx"


function App() {

  return (
    <>
      <div className="px-12 mb-10">
        <h1 className="font-semibold text-3xl mt-5">Mobile Phones</h1>
        <div className="flex justify-between items-center flex-wrap mt-4">
          <Card Title="IPhone 14 Pro Max" Price="250,000" Address="Saddar Karachi" src="https://images.olx.com.pk/thumbnails/481656642-800x600.webp" />
          <Card Title="Samsung Galaxy S24 PTA" Price="184,999" Address="Johar Town Phase-2, Lahore" src="https://images.olx.com.pk/thumbnails/482662995-800x600.webp" />
          <Card Title="IPhone 13| IPhone 14| IPhone 12" Price="89,999" Address="Model Town, Lahore" src="https://images.olx.com.pk/thumbnails/469290893-800x600.webp" />
          <Card Title="OPPO F15 8/128 oppo reno 8" Price="20,999" Address="Gulberg Lahore" src="https://images.olx.com.pk/thumbnails/464083950-800x600.webp" />
        </div>
        <h1 className="font-semibold text-3xl mt-5">Cars</h1>
        <div className="flex justify-between items-center flex-wrap mt-4">
          <Card Title="Changan Other 2022" Price="5,200,000" Address="F-6 Markaz, Islamabad" src="https://images.olx.com.pk/thumbnails/482314064-800x600.webp" />
          <Card Title="Toyota Fortuner 2021" Price="13,200,000" Address="DHA Defence, Lahore" src="https://images.olx.com.pk/thumbnails/479893454-800x600.webp" />
          <Card Title="Honda Civic VTi Oriel Prosmatec" Price="1,950,000" Address="Zafarwal Road, Sialkot" src="https://images.olx.com.pk/thumbnails/482304993-800x600.webp" />
          <Card Title="Hyundai Santro 2005 " Price="1,150,00020,999" Address="Gulshan-e-Ravi, Lahore" src="https://images.olx.com.pk/thumbnails/482416609-800x600.webp" />
        </div>
        <h1 className="font-semibold text-3xl mt-5">Bikes & Motorcycles</h1>
        <div className="flex justify-between items-center flex-wrap mt-4">
          <Card Title="Kawasaki Ninja H2 2021" Price="720,000" Address="DHA Phase-1, Lahore" src="https://images.olx.com.pk/thumbnails/475410064-240x180.webp" />
          <Card Title="Kawasaki ZX-400(replica)" Price="850,000" Address="DHA Phase-2 Extension, Karachi" src="https://images.olx.com.pk/thumbnails/444923743-240x180.webp" />
          <Card Title="Harley Davidson Jackpot Replica" Price="1,275,000" Address="Cantt, Lahore" src="https://images.olx.com.pk/thumbnails/475402132-240x180.webp" />
          <Card Title="Suzuki GR 150" Price="270,000" Address="Sundar Estate, Lahore" src="https://images.olx.com.pk/thumbnails/480323520-800x600.webp" />
        </div>
        <h1 className="font-semibold text-3xl mt-5">Houses</h1>
        <div className="flex justify-between items-center flex-wrap mt-4">
          <Card Title="10 Marla Brand new House for Sale" Price="52,500,000" Address="Bahria Enclave, Islamabad" src="https://images.olx.com.pk/thumbnails/471887164-240x180.webp" />
          <Card Title="10 Marla House for Sale in Model Town" Price="59,500,000" Address="Model Town - Block M, Lahore" src="https://images.olx.com.pk/thumbnails/481231006-800x600.webp" />
          <Card Title="5.5 Marla House double story for sale Khayaban Colony" Price="9,500,000" Address="Khayaban Colony, Faisalabad" src="https://images.olx.com.pk/thumbnails/482287071-800x600.webp" />
          <Card Title="120 SQyrds i unit Bungalow for sale" Price="30,000,000" Address="Gulshan-E-Iqbal Block 2, Karachi" src="https://images.olx.com.pk/thumbnails/480346854-800x600.webp" />
        </div>
        <h1 className="font-semibold text-3xl mt-5">Tablets</h1>
        <div className="flex justify-between items-center flex-wrap mt-4">
          <Card Title="Tabs Fresh Stock (Wifi & Sim Models) Samsung, Huawei, Lenovo All" Price="7,999" Address="Johar Town, Lahore" src="https://images.olx.com.pk/thumbnails/481387867-800x600.webp" />
          <Card Title="Amazon Kindle Paperwhite Book Reader 6th 7th 10th generation Ereader 8" Price="3,500" Address="Saddar, Rawalpindi" src="https://images.olx.com.pk/thumbnails/172509658-800x600.webp" />
          <Card Title="Tabs /Tabs for Kids/Tabs for Gaming/samsung/Amazon/ Huawei/Lenovo/LG" Price="7,999" Address="Gulberg, Lahore" src="https://images.olx.com.pk/thumbnails/471329343-800x600.webp" />
          <Card Title="Tabs For Kids, Official Work, Home Use, Best Stock Available for Sale." Price="8,999" Address="Gulberg 3, Lahore" src="https://images.olx.com.pk/thumbnails/480664832-800x600.webp"/>
        </div>
      </div>
    </>
  )
}

export default App
