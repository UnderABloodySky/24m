import React from 'react';
import styled, { withTheme } from 'styled-components';
import CardImage from './CardImage';
import CardInfo from './CardInfo';

const CardWrapper = styled.article`
  width: 360px;
  max-width: 100%;
  background-color: #fff;
  position: relative;
  z-index: 2;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 4px 8px -2px rgba(0,0,0,.45);
`;

const Image = styled.img`
  display:block;
  margin: 0 auto;
  width: auto;
  height: 300px;
`;

const Card = (props) => {
  
  console.log(props.tweet)
  const months = [ 'ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.' ];
  const date = new Date(props.tweet.tweet_created_at);
  const formattedDate = date.getFullYear()
                        + '-' + date.getMonth()+1
                        + '-' + date.getDate()
                        + ' ' + date.getHours()
                        + ':' + date.getMinutes()
                        + ':' + date.getSeconds();
  const strDate = date.getDate() + ' ' + months[date.getMonth()];

  return (
    <CardWrapper className="Card">
      <CardImage media={props.tweet.media} />
      <CardInfo date={props.tweet.tweet_created_at} text={props.tweet.full_text} author={props.tweet.user} />
      {/* <div>
        <time datetime={formattedDate}>{strDate}</time>
        <p>{props.tweet.full_text}</p>
        <div>
          <img src={props.tweet.user.profile_image_url_https} alt="" />
          <p class="author">{props.tweet.user.name} - @{props.tweet.user.screen_name}</p>
        </div>
      </div> */}
    </CardWrapper>
  );
}

export default withTheme(React.memo(Card));