import React from 'react';
import _ from 'lodash';
import styles from './styles.scss';

import PlayerFavoriteButton from './PlayerFavoriteButton';
import { useTranslation } from 'react-i18next';
import QueuePopup from '../QueuePopup';

const PlayerSongControls = ({
  playing,
  loading,
  tracks,
  favorites,
  addToFavorites
}) => {
  const { t } = useTranslation('player');

  const currentSong = _.head(tracks);

  const onFavoriteButtonClicked = () => {
    addToFavorites(currentSong);
    return <QueuePopup track={currentSong} />;
    // TODO: Show a QueuePopup or find out how to show it.
  };

  return (
    <div className={styles.player_song_controls_container}>
      <PlayerFavoriteButton
        onClick={onFavoriteButtonClicked}
        icon='favorite'
        playing={playing}
        loading={loading}
      />
    </div>
  );
};

export default PlayerSongControls;
