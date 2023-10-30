import './_Badge.scss';

const Badge = ({ status }) => {
    const statusColor = status => {
        switch (status) {
            case 'Aberto':
                return 'open';
            case 'Progresso':
                return 'progress';
            case 'Atendido':
                return 'closed';
        }
    };

    const badgeStatusColor = statusColor(status);

    return (
        <td data-label="Status">
            <span className={badgeStatusColor}>{status}</span>
        </td>
    );
};

export default Badge;
