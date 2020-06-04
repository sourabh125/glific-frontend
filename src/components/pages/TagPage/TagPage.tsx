import React from 'react';
import { TagList } from '../../../containers/Tag/TagList/TagList';

export interface TagPageProps {}

export const TagPage: React.SFC<TagPageProps> = () => {
  return (
    <div>
      <h2>Tags</h2>
      <TagList />
    </div>
  );
};
