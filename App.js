

import React, { Component } from 'react';
import CustomListview from './components/CustomListview'

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component{


  /* Return object for populate the list */
  getData() {
    return [
      {
        key: 1, title: 'Name : Faizan Shoukat Abbasi',
        description: 'Reg No : 17-Arid-1708',
        image_url: 'https://mir-s3-cdn-cf.behance.net/user/276/e5f130343637127.5d3c1d40400f4.png'
      },
      {
        key: 2,
        title: 'Name : Mustansar Iqbal Hamza',
        description: 'Reg No : 17-Arid-1738',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsxeERpHAAIaqPb7DBTSLPeoTV5etifvFkFQ&usqp=CAU'
      },
      {
        key: 1, title: 'Name : Asif Khan',
        description: 'Reg No : 17-Arid-1729',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-sCk4DpaMeaI_jQtwlzWT6EIAbuZuZKPQpg&usqp=CAU'
      },
      {
        key: 2,
        title: 'Name : Aqsa Jabeen',
        description: 'Reg No : 17-Arid-1708',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb4gZqAMnXc_Qjbd9Vp2lGEaQ_AEiKr1AzIQ&usqp=CAU'
      },
      {
        key: 1, title: 'Name : Ammar Satti',
        description: 'Reg No : 17-Arid-1702',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQisia4dfzfg-CIXuc42RfrAe6S7kz00I2ySA&usqp=CAU'
      },
      {
        key: 2,
        title: 'Name : Usama Ali Qadri',
        description: 'Reg No : 17-Arid-1750',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkdmBlUjr90bSBoRIamgSAJk8-ato95JFhqA&usqp=CAU'
      },
      {
        key: 1, title: 'Name : Kanwal Tahir',
        description: 'Reg No : 17-Arid-1754',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      
    ]
  }


  render() {
    return (
      <View style={styles.container}>
        <CustomListview
          itemList={this.getData()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  }
});
