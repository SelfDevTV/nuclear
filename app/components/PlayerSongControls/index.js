import React from 'react';

import styles from './styles.scss';

import PlayerFavoriteButton from './PlayerFavoriteButton';
import { useTranslation } from 'react-i18next';

const PlayerSongControls = ({ playing, loading, currentSong }) => {
  const { t } = useTranslation('player');

  return (
    <div className={styles.player_song_controls_container}>
      <PlayerFavoriteButton
        onClick={() => null}
        currentSong={currentSong}
        icon='favorite'
        playing={playing}
        loading={loading}
      />
    </div>
  );
};

export default PlayerSongControls;
