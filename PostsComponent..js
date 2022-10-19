import React from 'react';
import {Text,TouchableOpacity,View,ScrollView} from 'react-native';

const PostsComponent = (props) => {
 const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => alert('Item pressed!')}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center'
          }}>

          <Text
            category='s1'
            style={{
              color: '#000'
            }}>{`${item.id} : ${item.body}`}</Text>

        </View>
        <Text
          category='s1'
          style={{
            color: '#000',
            fontWeight: 'bold',
            paddingStart: 10,
          }}>{Math.floor(100000000 + Math.random() * 900000000)}</Text>
      </TouchableOpacity>
    );
  };
    return (
      <ScrollView showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} >
          {props.data.length > 0 && props.data.map((item) => (
            renderItem(item)
          ))}

        </ScrollView>
    )
  }

export default PostsComponent;