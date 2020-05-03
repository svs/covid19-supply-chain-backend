import React, { useEffect } from 'react';
import { TreeSelect } from 'antd';
import { useState } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';

const { TreeNode } = TreeSelect;

export const useItems = () => {
  const [items, setItems] = useState({});

  const decorateItems = (res) => {
    const out = {};
    
    res.forEach(item => {
      out[item.category] = out[item.category] || {};
      out[item.category][item.type] = out[item.category][item.type] || [];
      out[item.category][item.type].push(item);
    });

    return out;
  };

  useEffect(() => {
    fetch('/api/v1/items')
      .then(res => res.json())
      .then((res) => {
        setItems(decorateItems(res))
      })
  }, [])

  return items;
}

const EssentialsSelect = ({ items, ...props }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (props.value && Object.keys(items).length) setValue(props.value);
  }, [items, props]);

  return (
    <TreeSelect
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Select Item"
      treeDefaultExpandAll
      showSearch
      {...props}
      value={value}
      // onChange={onChangeHandler}
    >
      {
        Object.keys(items).map((category) => {
          return (
            <TreeNode key={category} title={category} selectable={false}>
              {Object.keys(items[category]).map((type) => {
                return (
                  <TreeNode key={type} title={type} selectable={false}>
                    {items[category][type].map(option => (
                        <TreeNode title={option.name} value={option.id}></TreeNode>
                    ))}
                  </TreeNode>
                )
              })}
            </TreeNode>
          );
        })
      }
    </TreeSelect>
  )
};

export default EssentialsSelect;