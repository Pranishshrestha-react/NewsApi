import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView, Image } from 'react-native';
import NewsContext from '../store/contexts/NewsContext';



const HomeScreen = props => {
  const newsContext = useContext(NewsContext);

  const getAllData = () => {
    newsContext.getNews();
  }

  const getAllHeadlines = () => {
    newsContext.getHeadLines();
  }
  const getAllSources = () => {
    newsContext.getSources();
  }

  const mainNews = ({ item }) => {
    return (
      <View style={{ height: 200 }}>
        <View style={{ height: 150, width: 180 }}>
          <Image source={{ uri: item.urlToImage }} style={{ backgroundColor: '#cdd7ee', height: 120, width: 160, borderRadius: 20 }} />
          <Text style={{ color: 'blue' }}>{item.title}</Text>
          <Text style={{ marginTop: 5 }}>{item.source.name}</Text>

        </View>
      </View>
    )
  }

  const TopNews = ({ item }) => {
    return (
      <View style={{ height: 200 }}>
        <View style={{ height: 150, width: 180 }}>
          <Image source={{ uri: item.urlToImage }} style={{ backgroundColor: '#cdd7ee', height: 120, width: 160, borderRadius: 20 }} />
          <Text style={{ color: '#47443d', fontSize:11 }}>{item.title}</Text>
         

        </View>
      </View>
    )
  }

  const SourceNews = ({item}) => {
    return (
      <View >

      
        <Text style={{ color: '#47443d', fontSize:15 }}>{item.category}</Text>
        
       

      </View>
    
    )
  }

  React.useEffect(() => {
    getAllData();
    getAllHeadlines();
    getAllSources();
  }, [])



  return (
    <ScrollView
      showsVerticalScrollIndicator={false}>
      <View style={styles.screen}>
        <View>
          <Text style={{ paddingLeft: 10, color: '#47443d', fontSize: 21, paddingBottom: 10, textAlign: 'justify', width: '100%' }}>HeadLines</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          data={newsContext.headlines}
          renderItem={TopNews}
          keyExtractor={(item, i) => i.toString()}
          ListEmptyComponent={() => <Text>LOADING</Text>}
        />

        <View>
          <Text style={{ paddingLeft: 10, color: '#47443d', fontSize: 21, paddingBottom: 10, textAlign: 'justify', width: '100%' }}>Categories</Text>
        </View>
        

        <View style={{ height: 500, width: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', }}>
          <FlatList
            
            data={newsContext.sources}
            renderItem={SourceNews}
            keyExtractor = {(item, i) => i.toString()}
            ListEmptyComponent= {() => <Text>LOADING</Text>}
            />
        </View>


        <View>
          <Text style={{ paddingLeft: 10, color: '#47443d', fontSize: 21, paddingBottom: 10, textAlign: 'justify', width: '100%' }}>All News</Text>
        </View>


        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newsContext.allNews}
          renderItem={({ item }) => <View style={{ height: 200 }}>
            <View style={{ height: 150, width: 180 }}>
              <Image source={{ uri: item.urlToImage }} style={{ backgroundColor: '#cdd7ee', height: 120, width: 160, borderRadius: 20 }} />
              <Text style={{ color: '#47443d', fontSize:11}}>{item.title}</Text>
              <Text style={{ marginTop: 5 }}>{item.source.name}</Text>

            </View>
          </View>}
          keyExtractor={(item, i) => i.toString()}
          ListEmptyComponent={() => <Text>LOADING</Text>}

        />
      </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
   
  },
});

export default HomeScreen;