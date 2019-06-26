import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles.scss';

import { useTranslation } from 'react-i18next';

const PlayerFavoriteButton = ({ onClick, loading, playing, icon }) => {
  const getIcon = () => {
    if (loading) {
      return (
        <div className={styles.player_song_controls}>
          <FontAwesome name='spinner' pulse />
        </div>
      );
    } else {
      return (
        <div className={styles.player_song_controls}>
          <FontAwesome name='star' />
        </div>
      );
    }
  };

  return getIcon();
};

export default PlayerFavoriteButton;
