import React, { useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useId } from 'react';
import { formatName } from "../lib/helpers";
import styles from '../styles/components/AutocompleteWrapper.module.scss';
import { UserAutocompleteProps } from '../lib/types';

const UserAutocomplete: React.FC<UserAutocompleteProps> = ({ users, onUserSelect }) => {
    const uniqueId = useId();
    const options = users.map(user => formatName(user));

    return (
        <Autocomplete
            className={styles.wrapper}
            id={`combo-box-demo-${uniqueId}`}
            options={options}
            onChange={(_, value) => onUserSelect(users.find(user => formatName(user) === value))}
            renderInput={(params) => <TextField {...params} label="Search Users" />}
        />
    );
};

export default UserAutocomplete;
