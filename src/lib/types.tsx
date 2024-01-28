export type UserType = {
    name: string;
    id: number;
    email?: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }
};

export type UniqueChildren = {
    uniqueId: number;
};

export type UniqueChildProps = {
    uniqueId: string;
};

export type HeaderProps = {
    children: React.ReactElement<UniqueChildren>[];
    selected: number;
    setSelected: (index: number) => void;
};

export type ViewSwitchProps = {
    index: number;
    children: React.ReactElement<UniqueChildren>[];
};

export type UserAutocompleteProps = {
    users: UserType[];
    onUserSelect: (user: UserType | undefined) => void;
};

export type UserCountContextType = {
    users: UserType[] | [];
    addUser: (user: UserType) => void;
    removeUser: (index: number) => void;
};

export type UserInfoProps = {
    user: UserType | undefined;
};

export type HeaderUserProps = {
    user: UserType;
    index: number;
    canRemove?: boolean;
};

export type HeaderUserListProps = {
    users: UserType[];
    canRemove?: boolean;
};

export type WithUniqueIdProps = {
    uniqueId: string;
};