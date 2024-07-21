import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';

type Props = {
  uri: string;
  cache?: boolean;
  headers?: {[key: string]: string};
  requestType?: 'GET' | 'POST';
};

const ImageWrapper = (props: Props) => {
  const {
    uri = '',
    cache = false,
    headers = {},
    requestType = 'GET',
  } = props || {};

  const [base64Image, setBase64Image] = useState(null);

  useEffect(() => {
    const fetchAndCacheImage = async () => {
      if (cache) {
        try {
          // Check if the image is already cached
          const cachedImage = await AsyncStorage.getItem(uri);

          if (cachedImage) {
            // If cached, use the cached image
            setBase64Image(cachedImage);
          } else {
            // If not cached, fetch the image
            const response = await ReactNativeBlobUtil.fetch(
              requestType,
              uri,
              headers,
            );
            const base64Data = await response.base64();

            // Store the image in AsyncStorage
            await AsyncStorage.setItem(uri, base64Data);

            // Set the base64 image for rendering
            setBase64Image(base64Data);
          }
        } catch (error) {
          console.error('Error fetching or caching image:', error);
        }
      }
    };

    fetchAndCacheImage();
  }, [cache, uri]);

  if (cache) {
    if (base64Image) {
      return (
        <Image
          source={{uri: `data:image/jpeg;base64,${base64Image}`}}
          style={{height: 50, width: 50}}
        />
      );
    }

    return <Image source={{uri: uri}} style={{height: 100, width: 100}} />;
  }

  return <Image source={{uri: uri}} style={{height: 100, width: 100}} />;
};

export const deleteCache = async (uri: string) => {
  try {
    await AsyncStorage.removeItem(uri);
  } catch (e) {
    return 'error in deleting cache';
    // remove error
  }

  return 'cache deleted';
  console.log('Done.');
};

export default ImageWrapper;
