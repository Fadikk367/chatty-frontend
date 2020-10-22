import React, { useState, useRef } from 'react'
import { FormWrapper, FormSection, FlexRow } from './FilterRoomsForm.css';

const FilterRoomsForm = () => {
  const [searchText, setSearchText] = useState('');
  const [tags, setTags] = useState<string[]>([])
  const [isSortedByCreatinDate, setIsSortedByCreationDate] = useState(false);
  const tagInputRef = useRef<HTMLInputElement>(null);

  const handleAddFilterTag = () => {
    if (tagInputRef) {
      const tag = tagInputRef.current?.value;
      if (tag)
        setTags([...tags, tag]);
    }
  }
  return (
    <FormWrapper>
      <FormSection>
        <input 
          type="text" 
          placeholder="search by phrase..." 
          value={searchText} 
          onChange={e => setSearchText(e.target.value)}
        />
        <FlexRow>
          Show protected:
          <input type="checkbox"/>
        </FlexRow>
      </FormSection>
      <FormSection>
        Sort by creation date:<br />
        <FlexRow>
          <input 
            type="radio" 
            name="sort-by-creation-date"
            checked={isSortedByCreatinDate}
            onChange={e => setIsSortedByCreationDate(true)}
          />
          <input 
            type="radio" 
            name="sort-by-creation-date"
            checked={!isSortedByCreatinDate}
            onChange={e => setIsSortedByCreationDate(false)}
          />
        </FlexRow>
      </FormSection>
      <FormSection>
        Search by tags:<br />
        <FlexRow>
          <input 
            type="text" 
            placeholder="search by tags" 
            ref={tagInputRef}
          />
          <button onClick={handleAddFilterTag}>add tag</button>
        </FlexRow>
        {tags.map(tag => (<span key={tag}>{tag}</span>))}
      </FormSection>
    </FormWrapper>
  )
}

export default FilterRoomsForm;
