import React, { Component } from 'react';
import Header from '../Components/Header';
import Text from '../Components/Text';
import Select from '../Components/Select';
import Studies from '../Components/Studies';

class CaseStudies extends Component {
  render() {
    return (
      <div class="overflow-x-hidden">
      <div class="bg-gradient-to-b from bg-blue-10 to bg-white h-xxl">
      <div class="items-center  px-16 py-7  ">
      <Header />
      <div class="grid grid-flow-row place-content-center text-center gap-6 " >
        <Text class1 ="font-extrabold text-center text-7xl">CASE STUDIES</Text>
        <Text class1="mb-8 ">See how leading organizations and freelance developers have used Webber to tackle <br/>different use cases and get ahead of the competition</Text> 
        <div class="w-3/4 p-4 border-2 place-self-center grid grid-flow-col gap-8 place-content-center  border-gray-300 rounded-sm">
          <Select label="Region: " />
          <Select label="Industry: " />
          <Select label="Type: " />
        </div>
      </div>
      
      <div class="mt-16 grid grid-flow-row grid-cols-2 gap-4 place-content-center ">
        <Studies class1="mt-40" src="https://i.postimg.cc/CKcFPp2j/Project-Cover.png" sub="Technology - SaaS" heading="Adobe Systems Inc" desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software" ></Studies>
        <Studies src="https://i.postimg.cc/NMtzHKDD/Project-Cover.png" sub="Kanban Software" heading="Trello" desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software">
</Studies>
        <Studies class1="mt-40" src="https://i.postimg.cc/QxgJyjQ9/Project-Cover-1.png" sub="Technology - SaaS" heading="Gutkowski, Schuppe and Pagac" desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
        <Studies src="https://i.postimg.cc/prfz4BFb/Project-Cover-2.png" sub="Airline" heading="Swiss Airline" desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
        <Studies class1="mt-40" src="https://i.postimg.cc/65zGZqV0/Project-Cover-3.png.png" sub="Technology - SaaS" heading="Virtual Reality" desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
        <Studies src="https://i.postimg.cc/2Sb85S03/Project-Cover-4.png" sub="Kanban Software" heading="Mann and Sons" desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
      </div>
    </div>
  </div>
  </div>
      
    );
  }
}

export default CaseStudies;