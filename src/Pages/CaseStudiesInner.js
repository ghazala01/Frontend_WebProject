import React, { Component } from 'react';
import Header from '../Components/Header';
import Text from '../Components/Text';
import Studies from '../Components/Studies';
import Button from '../Components/Button';
import Footer from '../Components/Footer';

class CaseStudiesInner extends Component {
  render() {
    return (
      <div class="overflow-x-hidden">
      <div class=" bg-gradient-to-b from bg-blue-10 to bg-white h-auto">
      <div class="  items-center   px-16 py-7  ">
      <Header />
      <div class="grid grid-flow-col grid-cols-2" >
        <div class="float-left grid gap-2 grid-flow-row w-11/12" >  
        <Text class1="text-gray-600 text-md">Kanban Software</Text>
        <Text class1="font-extrabold text-4xl">Trello x Weber</Text>
        <Text class1="text-gray-600 text-md">
          Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software.
        </Text>
        <div class="mt-8 grid grid-cols-2 gap-3 grid-flow-row ">
          <Text>Industry: Technology</Text>
          <Text>Since: 2018</Text>
          <Text>Use Case: Developer operations</Text>
          <Text>Package: Enterprise+</Text>
        </div>
        <div class="mt-28 grid gap-3 grid-flow-row ">
          <Text class1="font-bold text-3xl" >The details</Text>
          <Text>It is a long established fact that a reader will be distracted by the readable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
          <img src="https://i.postimg.cc/nVsNPShb/Rectangle-44.png"></img>
          <Text class1="font-semibold text-gray-700">Breakdown of milestones</Text>
          <Text>
            - Mauris ullamcorper neque sed mauris gravida, vel mollis velit molestie.
            <br/>
            - Donec iaculis erat in vulputate venenatis.
            <br/>
            - Vestibulum et velit et metus commodo iaculis.
            <br/>
            - Sed et urna a felis accumsan commodo vel vel nibh.
            <br/>
            - Praesent sollicitudin nulla non sollicitudin varius.
            <br/>
            - Integer convallis orci sed diam volutpat feugiat.
            <br/>
            - Donec posuere arcu non semper maximus.
      </Text>

      <br />
      <img src="https://i.postimg.cc/jSh17GZN/Rectangle-45.png"></img>
      <Text>
        It is a long established fact that a reader will be distracted by the readable.
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </Text>
      </div>
      </div>

      <div class="float-right w-96">
        <img class="mb-8 float-right" src="https://i.postimg.cc/tC3Cn4Pg/Project-Cover-6.png"></img>
        <div class="text-white h-auto p-10 grid grid-flow-row  gap-4 clear-both bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50">
          <Text class1="font-medium text-lg">Get Webber for your organization</Text>
          <Text class1="text-sm">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.
          </Text>
          <div class="grid grid-flow-col gap-2">
            <Button class="rounded-sm  text-blue-100 bg-white ">Start trial</Button>
            <Button class="rounded-sm  text-white border-2 border-white bg-transparent ">Contact sales</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
      <hr/>

<div class=" p-6 bg-gray-50">
  <Text class1="ml-9 text-xl font-bold">More case studies</Text>

  <div class="grid grid-flow-col place-content-center gap-6 " >
    
    <Studies src="https://i.postimg.cc/CKcFPp2j/Project-Cover.png" sub="Technology - SaaS" heading="Adobe Systems Inc" desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software" ></Studies>
    <Studies src="https://i.postimg.cc/NMtzHKDD/Project-Cover.png" sub="Kanban Software" heading="Trello" desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
    <Studies src="https://i.postimg.cc/QxgJyjQ9/Project-Cover-1.png" sub="Technology - SaaS" heading="Gutkowski, Schuppe and Pagac" desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
    <Studies src="https://i.postimg.cc/prfz4BFb/Project-Cover-2.png" sub="Airline" heading="Swiss Airline" desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"></Studies>

  </div>
</div>
</div>
        
<hr class=""/>
<Footer />
</div>
        
      
    );
  }
}

export default CaseStudiesInner;